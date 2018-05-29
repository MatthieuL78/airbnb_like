class ItemUpdate < ActiveRecord::Migration[5.2]
  def change
  	create_table :items_carts do |t|
      t.belongs_to :item, index: true
      t.belongs_to :cart, index: true
  	end

    change_table :items do |t|
      t.remove :cart_id
    end

  end
end
