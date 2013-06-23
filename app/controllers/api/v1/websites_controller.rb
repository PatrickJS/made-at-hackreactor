module Api
  module V1
    class WebsitesController < ApplicationController
      respond_to :json

      def shortlink
        puts params
        @websites = Website.find(params[:id])
        redirect_to @websites.url
      end

      def banner
        puts '========-serve_banner-========='
        puts params
        @websites = Website.where(name: params[:company_name]).first_or_create({
            url: params[:url],
            content: params[:description],
            team: params[:team],
            github: params[:github],
            github_repo: params[:github_repo],
            facebook: params[:facebook],
            twitter: params[:twitter]
          })
        puts '========-end_serving_banner-========='
        @websites.update_attributes(views: @websites.views+1)
        if params[:banner] == "true"
          redirect_to 'https://hackreactor.herokuapp.com/assets/hackrrBanner.png'
        else
          redirect_to 'https://hackreactor.herokuapp.com/assets/noBanner.gif'
        end
      end
      def callback
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
