class NotesController < ApplicationController
    def index
        notes = Note.all
        render json: notes, except: [:created_at, :updated_at]
    end

    def show
        @note = Note.find_by(id: params[:id])
        render json: @note, except: [:created_at, :updated_at]
    end

    def new
        @note = Note.new 
    end

    def create
        @note = Note.create(note_params)
        render json: @note, except: [:created_at, :updated_at]
    end

    def edit
        @note = Note.find(params[:id])
    end

    def update
        @note = Note.find(params[:id])
        @note.update(note_params)
        render json: @note, except: [:created_at, :updated_at]
    end

    def destroy
        @note = Note.find(params[:id])
        @note.destroy
        render json: @note, except: [:created_at, :updated_at]
    end

       private
        def note_params
            params.require(:note).permit(:title, :content, :desktop_id)
        end
end
