require 'test_helper'

class SkillTest < ActiveSupport::TestCase
  test "skill_count" do
    assert_equal 2, Skill.count
  end

  test "skill_find" do
    assert_equal "CSS", skills(:one).title
    assert_equal "CSS basics", skills(:one).description
  end
end
