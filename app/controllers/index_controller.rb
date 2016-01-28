class IndexController < ApplicationController
  include UsersHelper
  def index
    @skills = Skill.all
  end
end
