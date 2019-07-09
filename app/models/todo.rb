class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  has_many :steps,
    foreign_key: :todo

  has_many :taggings

  has_many :tags,
    through: :taggings
end