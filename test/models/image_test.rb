require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test "Image_count" do
    assert_equal 2, Image.count
  end

  test "image_find" do
    assert_equal "todo", images(:one).thumbnail
  end
end
