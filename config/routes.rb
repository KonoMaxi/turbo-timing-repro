Rails.application.routes.draw do
  root 'stepper#index'
  get 'stepper/index'
  get 'stepper/one'
  get 'stepper/two'
  get 'stepper/three'
  post 'stepper/two'
  post 'stepper/three'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
