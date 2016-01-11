class UsersController < ApplicationController
  def login
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render 'login'
    else
      render 'register'
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
