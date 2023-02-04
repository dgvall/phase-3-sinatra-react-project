class CreateSublists < ActiveRecord::Migration[6.1]
  def change
    create_table :sublists do |t|
      t.string :type
      t.integer :list_id
    end
  end
end
