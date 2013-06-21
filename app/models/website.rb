class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views, :name, :share, :social, :image
  serialize :team
  serialize :share
  serialize :social
  # before_validation :add_image
  after_create {|website| website.message 'create' }
  after_destroy {|website| website.message 'destroy' }
  before_save :update_redis
  after_update {|website| website.message 'update' }

  # def add_image
    # self.image = self.image || "#{self.id*8}#{self.name.length*8}_#{self.name}"
  # end
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
