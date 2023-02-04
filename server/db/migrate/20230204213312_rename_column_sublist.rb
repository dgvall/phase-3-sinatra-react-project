class RenameColumnSublist < ActiveRecord::Migration[6.1]
  def change
    rename_column :sublists, :type, :name
  end
end
