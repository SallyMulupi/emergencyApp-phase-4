class ReportsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    def index
        render json: Report.all, status: :ok
    end
    def show
        report=Report.find( params[:id])
        render json: report, status: :ok
    end
   def create 
    repo=Report.create(report_params)
    render json: repo, status: :created
   end



    def destroy
        report=Report.find(params[:id])
        report.destroy
        head :no_content
    end
    private
    def not_found_response
        render json: {error: "Report not found"}, status: :not_found
    end
    def unprocessable_entity_response(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entityps
    end

    def report_params
        params.permit(:title, :description, :location, :user_id)
    end
end
