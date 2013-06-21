class MainController < ApplicationController
  def index
  end
  def show_session
    render text: "Session (<a href='/reset_session'>reset</a>):<br/>" << session.inspect
  end

  def reset_session
    reset_session
  end
end
