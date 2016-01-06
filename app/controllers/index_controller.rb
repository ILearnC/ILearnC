class IndexController < ApplicationController
  def index
    @skills = Skill.all
  end

  def login
  end
end
