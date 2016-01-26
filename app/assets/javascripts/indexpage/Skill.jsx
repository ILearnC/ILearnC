let Skill = React.createClass({
  propTypes: {
    skill: React.PropTypes.object
  },

  render: function () {
    return (
      <div className='skills-item'>
        <div className='skill-image'/>
        <div className='skill-title'>
          <div>{this.props.skill.title}</div>
          <div>{this.props.skill.description}</div>
        </div>
      </div>
    )
  }
})
