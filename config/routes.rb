Rails.application.routes.draw do

  devise_for :users
  root 'home#index'
<<<<<<< HEAD
  
  resources :items
=======

  post '/', to: 'carts#destroy_item'
>>>>>>> 88086ef72ddc910d7b574969c079924dc0c6178b

  resources :items, :carts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
