require 'test_helper'

class WebsitesControllerTest < ActionController::TestCase
  setup do
    @website = websites(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:websites)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create website" do
    assert_difference('Website.count') do
      post :create, website: { content: @website.content, team: @website.team, url: @website.url, views: @website.views }
    end

    assert_redirected_to website_path(assigns(:website))
  end

  test "should show website" do
    get :show, id: @website
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @website
    assert_response :success
  end

  test "should update website" do
    put :update, id: @website, website: { content: @website.content, team: @website.team, url: @website.url, views: @website.views }
    assert_redirected_to website_path(assigns(:website))
  end

  test "should destroy website" do
    assert_difference('Website.count', -1) do
      delete :destroy, id: @website
    end

    assert_redirected_to websites_path
  end
end
