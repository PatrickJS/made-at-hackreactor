require 'api_constraints'
MadeAtHackreactor::Application.routes.draw do

  namespace :api do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      resources :websites
    end
  end


  root to: 'main#index'
end
