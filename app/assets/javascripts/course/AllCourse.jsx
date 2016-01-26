let AllCourse = React.createClass({
  propTypes: {
    skills: React.PropTypes.array
  },

  render: function () {
    let courses = this.props.skills.map(skill => {
      return (
        <div className='skills-item'>
          <div className='skill-image'/>
          <div className='skill-title'>
            <div>{skill.title}</div>
            <div>{skill.description}</div>
          </div>
        </div>
      )
    })

    return (
      <div className='skills'>
        {courses}
      </div>
    )
  }
})
