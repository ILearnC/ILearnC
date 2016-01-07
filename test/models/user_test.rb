require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "user_count" do
    assert_equal 3, User.count
  end

  test "user_find" do
    assert_equal "LiuRong", users(:one).name
    assert_equal "xjxu@thoughtworks.com", users(:two).email
    assert_equal "123456", users(:three).password
  end
end
