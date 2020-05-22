class NotesController < ApplicationController
    def index
        notes = Note.all
        render json: notes, except: [:created_at, :updated_at]
    end

    def show
        note = Note.find_by(id: params[:id])
        render json: note, except: [:created_at, :updated_at]
    end
end
