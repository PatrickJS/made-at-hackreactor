class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views
end
