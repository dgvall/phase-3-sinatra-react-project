class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :text
      t.string :details
      t.boolean :priority
      t.integer :sublist_id
    end
  end
end
