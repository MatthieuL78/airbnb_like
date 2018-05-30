class HomeController < ApplicationController
  before_action :find_cat, only:[:show]
  before_action :set_cats
  def index
    @cats = Item.all
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
