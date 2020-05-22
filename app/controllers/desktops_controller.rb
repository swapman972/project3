class DesktopsController < ApplicationController
    def index
        desktops = Desktop.all
        render json: desktops, except: [:created_at, :updated_at]
    end

    def show
        desktop = Desktop.find_by(id: params[:id])
        render json: desktop, except: [:created_at, :updated_at]
    end
end
