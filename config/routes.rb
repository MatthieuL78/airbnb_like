Rails.application.routes.draw do
  root 'home#index'
  
  get "home/:id", to: "home#show", as: "show"

  devise_for :users

  post '/', to: 'carts#destroy_item'

  resources :items, :carts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
