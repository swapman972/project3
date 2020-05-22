class CreateDesktops < ActiveRecord::Migration[6.0]
  def change
    create_table :desktops do |t|
      t.string :owner
      t.integer :age
      t.boolean :adult
      t.string :bio 

      t.timestamps
    end
  end
end
