puts "🌱 Seeding spices..."

# Seed your database here
List.create(name: "Diego List")
List.create(name: "Dominick List")
Sublist.create(name: "Monday", list_id: 17)
Sublist.create(name: "Tuesday", list_id: 17)
Sublist.create(name: "Wednesday", list_id: 17)
Sublist.create(name: "Monday", list_id: 18)
Sublist.create(name: "Tuesday", list_id: 18)
Sublist.create(name: "Wednesday", list_id: 18)
Task.create(text: "wash dishes", sublist_id: 1, details: "", priority: 1)
Task.create(text: "return amazon package", sublist_id: 2, details: "", priority: 1)
Task.create(text: "turn in essay", sublist_id: 3, details: "", priority: 0)
Task.create(text: "buy groceries", sublist_id: 4, details: "", priority: 0)
Task.create(text: "take out trash", sublist_id: 5, details: "", priority: 0)

puts "✅ Done seeding!"
