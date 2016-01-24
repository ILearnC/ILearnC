class AddBasicInfoToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :teacher, :string
    add_column :skills, :skill_type, :integer
    add_column :skills, :start_date, :date
    add_column :skills, :end_date, :date
    add_column :skills, :head_count, :integer
  end
end
