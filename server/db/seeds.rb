puts "🌱 Seeding spices..."

# Seed your database here
Task.create(text: "wash dishes", sublist_id: 1, details: "", priority: 1, time: 3, meridiem: "am")
Task.create(text: "return amazon package", sublist_id: 1, details: "", priority: 1, time: 3, meridiem: "pm")
Task.create(text: "turn in essay", sublist_id: 1, details: "", priority: 0, time: 5, meridiem: "am")
Task.create(text: "buy groceries", sublist_id: 1, details: "", priority: 0, time: 0, meridiem: "")
Task.create(text: "take out trash", sublist_id: 1, details: "", priority: 0, time: 4, meridiem: "pm")

Task.create(text: "wash dishes", sublist_id: 2, details: "", priority: 1, time: 3, meridiem: "am")
Task.create(text: "return amazon package", sublist_id: 2, details: "", priority: 1, time: 3, meridiem: "pm")
Task.create(text: "turn in essay", sublist_id: 2, details: "", priority: 0, time: 5, meridiem: "am")
Task.create(text: "buy groceries", sublist_id: 2, details: "", priority: 0, time: 0, meridiem: "")
Task.create(text: "take out trash", sublist_id: 2, details: "", priority: 0, time: 4, meridiem: "pm")

Task.create(text: "wash dishes", sublist_id: 3, details: "", priority: 1, time: 3, meridiem: "am")
Task.create(text: "return amazon package", sublist_id: 3, details: "", priority: 1, time: 3, meridiem: "pm")
Task.create(text: "turn in essay", sublist_id: 3, details: "", priority: 0, time: 5, meridiem: "am")
Task.create(text: "buy groceries", sublist_id: 3, details: "", priority: 0, time: 0, meridiem: "")
Task.create(text: "take out trash", sublist_id: 3, details: "", priority: 0, time: 4, meridiem: "pm")

Task.create(text: "wash dishes", sublist_id: 4, details: "", priority: 1, time: 3, meridiem: "am")
Task.create(text: "return amazon package", sublist_id: 4, details: "", priority: 1, time: 3, meridiem: "pm")
Task.create(text: "turn in essay", sublist_id: 4, details: "", priority: 0, time: 5, meridiem: "am")
Task.create(text: "buy groceries", sublist_id: 4, details: "", priority: 0, time: 0, meridiem: "")
Task.create(text: "take out trash", sublist_id: 4, details: "", priority: 0, time: 4, meridiem: "pm")

puts "✅ Done seeding!"
