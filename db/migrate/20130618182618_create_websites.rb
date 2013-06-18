class CreateWebsites < ActiveRecord::Migration
  def change
    create_table :websites do |t|
      t.string :url
      t.integer :views
      t.text :content
      t.string :team

      t.timestamps
    end
  end
end
