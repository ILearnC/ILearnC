class UsersController < ApplicationController
  def login
  end

  def homepage
    username = params[:name]
    @user = User.find_by_name(username)
    if @user.password == params[:password] && @user.class != NilClass
      redirect_to :controller => 'index', :action => 'index'
    else
      render 'login'
    end
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
