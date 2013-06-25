class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views, :name, :facebook, :twitter, :github, :github_repo
  after_create {|website| website.message 'create' }
  after_destroy {|website| website.message 'destroy' }
  after_update {|website| website.message 'update' }
  before_save :update_redis

  def update_redis
    # $redis.set 'key', 'value'
    puts '==============Before-Save==================='
    puts '==-Changed?-=='
    puts self.changed?
    if self.views_changed?
      rdb[self.changed].incr
      puts "----------Views: #{rdb[self.changed].get}------------"
    end
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
    msg = { resource: 'websites',
            action: action,
            id: self.id,
            website: self ,
            encoded_token: token
          }
    $redis.publish "website.change", msg.to_json
  end
end
