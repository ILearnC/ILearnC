class ChangeTheSkillType < ActiveRecord::Migration
  def up
    change_column :skills, :skill_type, :integer
  end

  def down
    change_column :skills, :skill_type, :string
  end
end
