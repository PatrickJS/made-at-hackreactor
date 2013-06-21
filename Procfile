redis: redis-server
web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb
node: node node/server.js
worker: bundle exec rake jobs:work
