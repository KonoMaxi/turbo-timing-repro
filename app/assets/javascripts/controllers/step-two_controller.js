import { Controller } from "stimulus"
import Rails from 'https://cdn.skypack.dev/@rails/ujs'

export default class extends Controller {
  static targets = [ "form" ]

  connect() {
    console.log("steptwo connected")
    this.element.dispatchEvent(new Event("connected"))
    setTimeout(() => this.element.dispatchEvent(new Event("connected:delayed")))
  }

  submit () {
    Rails.fire(this.formTarget, "submit")
  }
}
