Rails.application.routes.draw do

  devise_for :users
  root 'home#index'

  get "users/sign_up", to: "users#new", as: "sign_up"
  get "users/sign_in", to: 'sessions#new', as: "sign_in"

  post '/', to: 'carts#destroy_item'

  resources :items, :carts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
