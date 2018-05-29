class ItemChange < ActiveRecord::Migration[5.2]
  def change
  	change_table :items do |t|
  	  t.belongs_to :cart
  	end
  end
end
