class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views, :name, :share, :social, :image
end
