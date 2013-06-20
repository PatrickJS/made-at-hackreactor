class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views, :name, :share, :social, :image
  serialize :team
  serialize :share
  serialize :social
  after_create {|website| website.message 'create' }
  after_update {|website| website.message 'update' }
  after_destroy {|website| website.message 'destroy' }

  def message(action)
    msg = { resource: 'websites',
            action: action,
            id: self.id,
            website: self }

    $redis.publish 'rt-change', msg.to_json
  end
end
