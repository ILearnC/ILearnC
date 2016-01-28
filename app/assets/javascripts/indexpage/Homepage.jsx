let Homepage = React.createClass({
  propTypes: {
    skills: React.PropTypes.array
  },

  learningSkillId: 1,
  leisureSkillId: 2,

  getFourItem: function (skillId) {
    return _.take(_.filter(this.props.skills, ['skill_type', skillId]).reverse(), 4)
  },

  render: function () {
    let learningSkills = this.getFourItem(this.learningSkillId)
      .map(skill => {
        return (<Skill skill={skill} key={skill.id} />)
      })

    let leisureSkills =  this.getFourItem(this.leisureSkillId)
      .map(skill => {
        return (<Skill skill={skill} key={skill.id}/>)
      })

    let selfSkills = ''

    return (
      <div>
        <HeroPanel />
        <div className='ilearnc-body'>
          <h1>学习技能</h1>
          <div className='col-md-12 ilearnc-items'>
            {learningSkills}
          </div>

          <h1>生活技能</h1>
          <div className='col-md-12 ilearnc-items'>
            {leisureSkills}
          </div>

          {selfSkills}
        </div>
      </div>
    )
  }
})
