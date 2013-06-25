if Rails.env.production?
  uri = URI.parse(ENV["REDISTOGO_URL"])
  $redis = Redis.new(host: uri.host, port: uri.port, password: uri.password)
else
  $redis = Redis.new(host: 'localhost', port: 6379)
end

# monkey patch Next to_s to to_param
Nest.class_eval do
  def initialize(key, redis = $redis)
    super(key.to_param)
    @redis = redis
  end
  def [](key)
    self.class.new("#{self}:#{key.to_param}", redis)
  end
end
