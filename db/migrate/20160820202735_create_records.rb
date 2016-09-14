class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.integer :rType
      t.datetime :dateTime
      t.integer :pooVolume
      t.string :foodMedIn
      t.string :labName
      t.integer :labVal

      t.timestamps null: false
    end
  end
end
