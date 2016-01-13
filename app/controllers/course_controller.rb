class CourseController < ApplicationController
  include UsersHelper

  def course
    render 'addcourse'
  end
end
