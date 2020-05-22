class DesktopsController < ApplicationController
    def index
        desktops = Desktop.all
        render json: desktops #, except: [:bird, :location]
      end
end
