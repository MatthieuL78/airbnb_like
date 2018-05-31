class HomeController < ApplicationController
  before_action :find_cat, only:[:show]
  before_action :set_cats
  def index
    @cats = Item.all
    @check = 0;
    Cart.all.each do |cart|
      if cart.user == current_user
        @check = 1
        @cart = cart
        break
      end
    end
    if @check == 0
      @cart = Cart.new
      @cart.user = current_user
      @cart.save
    end
  end

  def show
  end

  private
  def set_cats
    @cats = Item.all
  end

  def find_cat
    @cat = Item.find(params[:id])
  end
end
