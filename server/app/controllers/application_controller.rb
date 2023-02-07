class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  # get '/' do
  #   list = List.find(17).tasks
  #   list.to_json
  # end

  # returns full nested data structure
  get '/lists' do
    lists = List.all
    lists.to_json(include: { sublists: { include: :tasks} })
  end

  # get '/lists/:id' do
  #   list = List.find(params[:id]).sublists
  #   list.to_json
  # end
  # get '/lists/:id/sublists' do
  #   sublists = List.find(params[:id]).sublists
  #   sublists.to_json
  # end
  # get '/lists/:id/sublists/:sublist_name' do
  #   sublists = List.find(params[:id]).sublists
  #   sublist = sublists.find_by(name: params[:sublist_name])
  #   sublist.to_json
  # end
end
