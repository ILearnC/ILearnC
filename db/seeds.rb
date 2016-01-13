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
                              {title: 'css', description: 'css basics', teacher: 'xiaodong', skill_type: '学习技能', start_date: '2015-09-10', end_date: '2015-12-01', head_count: 20, user: users.first},
                              {title: 'cook', description: 'cook basics', teacher: 'xiaodong', skill_type: '生活技能', start_date: '2015-10-10', end_date: '2015-11-30', head_count: 20, user: users.first}
                          ])

skill_set2 = Skill.create([
                              {title: 'Mobile', description: 'Mobile basics', teacher: 'xiaodong', skill_type: '学习技能', start_date: '2016-01-10', end_date: '2015-02-01', head_count: 20, user: users.last},
                              {title: 'Web', description: 'Web basics', teacher: 'xiaodong', skill_type: '学习技能', start_date: '2016-01-31', end_date: '2016-02-01', head_count: 20, user: users.last}
                          ])

Image.create([
                 {thumbnail: 'todo', skill: skill_set1.first},
                 {thumbnail: 'todo', skill: skill_set1.last},
                 {thumbnail: 'todo', skill: skill_set2.first},
                 {thumbnail: 'todo', skill: skill_set2.last}
             ])
