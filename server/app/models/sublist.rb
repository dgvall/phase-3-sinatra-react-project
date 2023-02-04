class Sublist < ActiveRecord::Base
  belongs_to :list
  has_many :tasks
end