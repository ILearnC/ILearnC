Rails.application.routes.draw do
  resources :index
  resources :users
  resources :course

  root 'index#index'

  get '/login' => 'users#login'
  get '/homepage' => 'users#homepage'
  get '/register' => 'users#register'
  post '/create' => 'users#create'
  get '/logout' => 'users#logout'

  get '/addcourse' => 'course#course'

end
