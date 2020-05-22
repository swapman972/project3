# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Desktop.destroy_all
Note.destroy_all
# if you want to destroy_all, you need to destroy_all notes first otherwise it will throw an error 
# that you can't destroy destop since it has notes associated to it
# but it was fixed with "depedent destroy in models"

jordan = Desktop.create(owner: "Jordan", age: 24, adult: true, bio: "Backend master")
steve = Desktop.create(owner: "Stephen", age: 30, adult: true, bio: "Frontend sensei")
matt = Desktop.create(owner: "VaporMax", age: 25, adult: true, bio: "Vapor Master")

note1 = Note.create(title: "First entry", content: "This is a test but I'll miss Matt", desktop: jordan)
note2 = Note.create(title: "Test", content: "test test test", desktop: steve)
note3 = Note.create(title: "Bye GOATs", content: "I'll miss this cohort they were really the GOATs...", desktop: matt)