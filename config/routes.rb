Rails.application.routes.draw do
  root 'home#index'

  get "home/:id", to: "home#show", as: "show"

  devise_for :users

  # get "users/sign_up", to: "users#new", as: "sign_up"
  # get "users/sign_in", to: 'sessions#new', as: "sign_in"
  # get "users/edit", to: 'sessions#edit', as: "edit"

  post '/', to: 'carts#destroy_item'

  resources :items, :carts
  get "carts/:id", to: "carts#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
