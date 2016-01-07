# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
                        {name: 'XiaoRong', email: 'xiaorong@gmail.com', password: '123456'},
                        {name: 'MengRu', email: 'mengru@gmail.com', password: '123456'}
                    ])
skill_set1 = Skill.create([
                              {title: 'css', description: 'css basics', user: users.first},
                              {title: 'Ruby', description: 'Ruby basics', user: users.first}
                          ])

skill_set2 = Skill.create([
                              {title: 'Mobile', description: 'Mobile basics', user: users.last},
                              {title: 'Web', description: 'Web basics', user: users.last}
                          ])

Image.create([
                 {thumbnail: 'todo', skill: skill_set1.first},
                 {thumbnail: 'todo', skill: skill_set1.last},
                 {thumbnail: 'todo', skill: skill_set2.first},
                 {thumbnail: 'todo', skill: skill_set2.last}
             ])
