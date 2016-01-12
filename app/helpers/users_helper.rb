module UsersHelper
  def log_in(user)
    session[:userId] = user.id
    session[:userName] = user.name
  end

  def has_user
    @has_user ||= User.find_by(id: session[:userId])
  end

  def logged_in?
    !has_user.nil?
  end

  def log_out
    session.delete(:userId)
    session.delete(:userName)
    @has_user = nil
  end
end
