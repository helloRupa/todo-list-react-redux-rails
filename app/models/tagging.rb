class Tagging < ApplicationRecord
  validates :todo_id, :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: :todo_id }

  belongs_to :tag

  belongs_to :todo
end