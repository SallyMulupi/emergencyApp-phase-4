class UsersController < ApplicationController
    
        def show
            user = User.find_by(id: session[:user_id])
            if user
            render json: user
            else
                render json: { error: "Not authorized" }, status: :unauthorized
            end
        end
    
        # def index
        #     user= User.all
        #     render json: user
        # end
    
        def create
            user = User.create(signup_params)
            if user.valid?
                session[:user_id] = user.id
                render json: user, status: :created
            else
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            
            end
    
        end
    
        private
        def signup_params
            params.permit(:username, :email, :password, :password_confirmation)
        end
    
end
