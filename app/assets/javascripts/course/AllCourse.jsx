let AllCourse = React.createClass({
  propTypes: {
    skills: React.PropTypes.array
  },

  render: function () {
    let courses = this.props.skills.map(skill => {
      return (
        <Skill skill={skill} />
      )
    })

    return (
      <div className='skills'>
        {courses}
      </div>
    )
  }
})
