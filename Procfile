redis: redis-server
web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb
node: node realtime/server.js
worker: bundle exec rake jobs:work
