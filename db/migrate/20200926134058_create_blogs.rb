class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :category
      t.text :content
      t.date :date

      t.timestamps
    end
  end
end
