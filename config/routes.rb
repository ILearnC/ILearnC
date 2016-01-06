Rails.application.routes.draw do
  resources :index
  root 'index#index'

  get '/login' => 'index#login'
end
 
