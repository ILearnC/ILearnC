Rails.application.routes.draw do
  resources :index

  root 'index#index'

  resources :users
  get '/login' => 'users#login'
  get '/homepage' => 'users#homepage'
  get '/register' => 'users#register'
  post '/create' => 'users#create'
end
