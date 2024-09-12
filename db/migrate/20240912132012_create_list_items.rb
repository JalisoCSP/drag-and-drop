class CreateListItems < ActiveRecord::Migration[7.1]
  def change
    create_table :list_items do |t|
      t.string :name
      t.float :position_score

      t.timestamps
    end
  end
end
