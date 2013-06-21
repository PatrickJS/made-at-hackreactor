class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views, :name, :share, :social, :image
  serialize :team
  serialize :share
  serialize :social
  after_create {|website| website.message 'create' }
  after_destroy {|website| website.message 'destroy' }
  before_save :update_redis
  after_update {|website| website.message 'update' }


  def update_redis
    # $redis.set 'key', 'value'
    puts '================================='
    puts '==-Changed?-=='
    puts self.changed?
    puts '==-Changed-=='
    puts self.changed
    puts '==-ID-=='
    puts self.id
    puts '================================='
    # $redis
  end
  def message(action)

    msg = { resource: 'websites',
            action: action,
            id: self.id,
            website: self }
    $redis.publish 'rt-change', msg.to_json
  end
end
