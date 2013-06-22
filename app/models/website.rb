class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views, :name, :facebook, :twitter, :github, :github_repo
  after_create {|website| website.message 'create' }
  after_destroy {|website| website.message 'destroy' }
  before_save :update_redis
  after_update {|website| website.message 'update' }

  def update_redis
    self.views ||= 0
    # self.image ||= "#{self.id*8}#{self.name.length*8}_#{self.name}"
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
    puts "=======-#{action}-message-======="
    token = "#{self.id*8}#{self.name.length*8}_#{self.name}"
    self.image = './assets/'+token+'.png';
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
