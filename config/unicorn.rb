# config/unicorn.rb
WEB_CONCURRENCY = Integer(ENV['WEB_CONCURRENCY']|| 3)

worker_processes WEB_CONCURRENCY
timeout 30
preload_app true

before_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
    Process.kill 'QUIT', Process.pid
  end

  # Replace with MongoDB or whatever
  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.connection.disconnect!
    Rails.logger.info('Disconnected from ActiveRecord')
  end

end

after_fork do |server, worker|
  # Replace with MongoDB or whatever
  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.establish_connection
    Rails.logger.info('Connected to ActiveRecord')
  end

  Signal.trap 'TERM' do
    puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to sent QUIT'
  end
  # If you are using Redis but not Resque, change this
  if defined?(Resque)
    ENV["OPENREDIS_URL"] ||= "redis://127.0.0.1:6379"
    uri = URI.parse(ENV["OPENREDIS_URL"])
    Resque.redis = Redis.new(:host => uri.host, :port => uri.port, :password => uri.password)
    Rails.logger.info('Connected to Redis')
  end
end
