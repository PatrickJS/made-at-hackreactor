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
    token = "#{self.id*8}#{self.name.length*8}_#{self.name}"
    # token = Rack::Utils.escape("#{self.id*8}#{self.name.length*8}_#{self.name}")
    msg = { resource: 'websites',
            action: action,
            id: self.id,
            website: self ,
            encoded_token: token
          }
    $redis.publish 'rt-change', msg.to_json
  end
end
