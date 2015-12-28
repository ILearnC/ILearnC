class IndexController < ApplicationController
  def index
    @skills = Skill.all
  end
end
