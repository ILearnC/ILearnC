Rails.application.routes.draw do
  resources :index

  root 'index#index'

  resources :users
  get '/login' => 'users#login'
  get '/register' => 'users#register'
end
