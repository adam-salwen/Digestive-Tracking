
class RecordsController < ApplicationController
  before_filter :authenticate, :except => [:index, :show]
 
  def index
    @records = Record.all
  end
  def show
    @record = Record.find(params[:id])
  end
  
  def new
    @record = Record.new
    @test = "Testing"
    @dateTime = DateTime.now
  end

  def edit
    @record = Record.find(params[:id])
  end
  
  def create
    @record = Record.new(record_params)


    if @record.save
      redirect_to @record
    else
      render 'new'
    end
  end

  def update
    @record = Record.find(params[:id])

    if @record.update(record_params)
      redirect_to @record
    else
      render 'edit'
    end
    
  end
    
  private
  def record_params
    params.require(:record).permit(:dateTime, :rType, :pooVolume, :foodMedIn, :labName, :labVal)
  end
  
end
