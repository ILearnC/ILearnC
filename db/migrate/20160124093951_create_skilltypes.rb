class CreateSkilltypes < ActiveRecord::Migration
  def change
    create_table :skilltypes do |t|
      t.string :typename

      t.timestamps null: false
    end
  end
end
