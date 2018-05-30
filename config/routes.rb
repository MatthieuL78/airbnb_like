Rails.application.routes.draw do
  root 'home#cat'
  get "home/:id", to: "home#show", as: "show"

  devise_for :users

  get "users/sign_up", to: "users#new", as: "sign_up"
  get "users/sign_in", to: 'sessions#new', as: "sign_in"

  post '/', to: 'carts#destroy_item'

  resources :items, :carts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
