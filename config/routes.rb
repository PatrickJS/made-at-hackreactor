MadeAtHackreactor::Application.routes.draw do

  namespace :api do
    resources :websites
  end


  root to: 'main#index'
end
