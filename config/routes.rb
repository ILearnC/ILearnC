Rails.application.routes.draw do
  get "hello" => "hello#index"

  root to: "hello#index"
end
