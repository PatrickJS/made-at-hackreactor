class Website < ActiveRecord::Base
  attr_accessible :content, :team, :url, :views, :name, :facebook, :twitter, :github, :github_repo
  # after_create :website_create
  # after_destroy :website_destroy
  # before_save :before_website_save
  # after_update :website_update
  after_create {|website| website.message 'create' }
  after_destroy {|website| website.message 'destroy' }
  before_save :update_redis
  after_update {|website| website.message 'update' }
  # def before_website_save
  def update_redis
    self.views ||= 0
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
  # def website_create
  #   $redis.publish 'website.create', msg.to_json
  # end
  # def website_destroy
  #   $redis.publish 'website.destroy', msg.to_json
  # end
  # def website_update
  #   $redis.publish 'website.destroy', msg.to_json
  # end
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
