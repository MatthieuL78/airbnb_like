class ChargesController < ApplicationController
	def new
	end

	def create
	  cart = Cart.find_by(user_id: current_user.id)
	  Item.all.each do |item|
        item.carts.delete(cart)
      end
	end

end