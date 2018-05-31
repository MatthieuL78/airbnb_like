Rails.application.routes.draw do
  root 'home#index'

  get "home/:id", to: "home#show", as: "show"

  devise_for :users

  post '/:id/item/:item', to: 'carts#add_item', as: 'add_item'
  post '/:id', to: 'carts#destroy_item', as: 'destroy_item'

  resources :items, :carts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
