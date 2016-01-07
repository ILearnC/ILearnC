require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "user_count" do
    assert_equal 2, User.count
  end
end
