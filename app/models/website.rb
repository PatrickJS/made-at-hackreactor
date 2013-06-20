class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views, :name, :share, :social, :image
  serialize :team, Array
  serialize :share, Hash
  serialize :social, Hash
end
