class UsersController < ApplicationController
  def login
  end

  def homepage
    username = params[:name]
    @user = User.find_by_name(username)
    if @user.class != NilClass && @user.password == params[:password]
      log_in @user
      has_user
      redirect_to :controller => 'index', :action => 'index'
    else
      render 'login'
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      has_user
      redirect_to :controller => 'index', :action => 'index'
    else
      render 'register'
    end
  end

  def logout
    log_out
    redirect_to :controller => 'index', :action => 'index'
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
