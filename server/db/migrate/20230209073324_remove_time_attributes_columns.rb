class RemoveTimeAttributesColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :time
    remove_column :tasks, :meridiem
  end
end
