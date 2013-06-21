require 'api_constraints'
MadeAtHackreactor::Application.routes.draw do

  namespace :api do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      resources :websites do
      end
    end
  end

  get '/banner/:company_name.png' => 'api/v1/websites#banner', format: false
  get '/callback' => 'api/v1/websites#callback'
  get '/session' => 'main#show_session'
  # get '/reset_session' => 'main#reset_session'


  root to: 'main#index'
end
