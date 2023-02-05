class List < ActiveRecord::Base
  has_many :sublists
  has_many :tasks, through: :sublists
end