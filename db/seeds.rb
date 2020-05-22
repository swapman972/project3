# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
jordan = Desktop.create(owner: "Jordan", age: 24, adult: true, bio: "Backend master")
steve = Desktop.create(owner: "Stephen", species: 30, adult: true, bio: "Frontend sensei")