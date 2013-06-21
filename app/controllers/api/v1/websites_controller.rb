module Api
  module V1
    class WebsitesController < ApplicationController
      respond_to :json

      def banner
        @websites = Website.all
        render file: "banner.gif.erb", content_type: 'application/json'
      end
      def callback
        puts params.inspect
        @websites = Website.all
        render file: "callback.json.erb", content_type: 'application/json'
      end

      # GET /api/websites.json
      def index
        @websites = Website.all

        render json: @websites
      end

      # GET /api/websites/1.json
      def show
        @website = Website.find(params[:id])

        render json: @website
      end

      # GET /api/websites/new.json
      def new
        @website = Website.new
        render json: @website
      end

      # GET /api/websites/1/edit
      def edit
        @website = Website.find(params[:id])
      end

      # POST /api/websites.json
      def create
        #redis
        @website = Website.new(params[:website])

        if @website.save
          render json: @website, status: :created
        else
          render json: @website.errors, status: :unprocessable_entity
        end
      end

      # PUT /api/websites/1.json
      def update
        #redis

        @website = Website.find(params[:id])

        if @website.update_attributes(params[:website])
          head :no_content
        else
          render json: @website.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/websites/1.json
      def destroy
        @website = Website.find(params[:id])
        @website.destroy

        head :no_content
      end

    end
  end
end
