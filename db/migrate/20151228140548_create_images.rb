class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.text :thumbnail
      t.belongs_to :skill, index: true

      t.timestamps null: false
    end
  end
end
