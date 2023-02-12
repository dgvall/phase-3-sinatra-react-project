class RemoveDetailsColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :details
  end
end
