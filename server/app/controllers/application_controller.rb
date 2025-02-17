class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # get full nested data structure
  get '/lists' do
    lists = List.all
    lists.to_json(include: { sublists: { include: :tasks} })
  end

  # create new list and initialize sublists
  post '/lists' do
    list = List.create(name: params[:name])
    sublists = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "General"]
    sublists.each do |s|
      Sublist.create(name: s, list_id: list.id)
    end
    list.to_json(include: { sublists: { include: :tasks} })
  end

  # create new task
  post '/lists/sublists/tasks' do
    task = Task.create(text: params[:text], priority: params[:priority], sublist_id: params[:sublist_id])
    task.to_json
  end

  # delete specific task
  delete '/lists/sublists/tasks/:id' do
    task = Task.find(params[:id])
    task.destroy
    task.to_json
  end

  # patch specific task
  patch '/lists/sublists/tasks/:id' do
    task = Task.find(params[:id])
    task.update(text: params[:text], priority: params[:priority], sublist_id: params[:sublist_id])
    task.to_json
  end
end
