Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :create, :show, :update, :destroy]
    resources :steps, only: [:index, :create, :show, :update, :destroy]
  end

  root 'static_pages#root'
end
