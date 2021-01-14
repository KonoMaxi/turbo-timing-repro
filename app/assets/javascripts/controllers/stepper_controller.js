import { Controller } from "stimulus"
import Rails from 'https://cdn.skypack.dev/@rails/ujs'

export default class extends Controller {
  static targets = [ "firstFormTurbo", "firstFormAjax", "secondForm", "turboInfo", "turboWarning", "stepTwoInfo", "twoConnected", "twoConnectedDelayed" ]

  connect() {
    console.log("stepper connected")
  }

  submitTurboForm () {
    console.log("===================================================")
    console.log("submitting turbo form programatically via rails-ujs")
    Rails.fire(this.firstFormTurboTarget, "submit")
  }
  submitAjaxForm () {
    console.log("===================================================")
    console.log("submitting ajax form programatically via rails-ujs")
    Rails.fire(this.firstFormAjaxTarget, "submit")
  }

  oneTurboSubmitted () {
    console.log("stepper received 'turbo:submit-end'")
    this.turboInfoTarget.parentNode.classList.remove("hidden")
    if (this.hasSecondFormTarget) {
      Rails.fire(this.secondFormTarget, "submit")
      this.turboInfoTarget.parentNode.classList.remove("alert")
      this.turboInfoTarget.classList.add("hidden")
      this.turboWarningTarget.classList.remove("hidden")
    } else {
      this.turboInfoTarget.parentNode.classList.remove("alert")
      this.turboInfoTarget.classList.remove("hidden")
      this.turboInfoTarget.parentNode.classList.add("alert")
    }
  }
  oneAjaxSuccess (event) {
    console.log("stepper received 'ajax:success'")
    document.getElementById("step-two").innerHTML = event.detail[2].response
    Rails.fire(this.secondFormTarget, "submit")
  }
  oneTurboSuccess () {
    console.log("Hi, oneTurboSuccess here. I should never fire.")
  }
  oneAjaxSubmitted () {
    console.log("Hi, oneAjaxSubmitted here. I should never fire")
  }

  twoConnected () {
    console.log("stepper received 'connected'")
    this.twoConnectedTarget.classList.add("info")    
  }
  twoConnectedDelayed () {
    console.log("stepper received 'connected:delayed'")
    this.twoConnectedDelayedTarget.classList.add("info")
  }
}
