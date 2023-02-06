class AddColumnTimeAttributes < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :time, :integer
    add_column :tasks, :meridiem, :string
  end
end
