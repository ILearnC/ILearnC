let AllCourse = React.createClass({
  propTypes: {
    skills: React.PropTypes.array
  },

  render: function () {
    let courses = this.props.skills.reverse().map(skill => {
      return (
        <BarCourse skill={skill} />
      )
    })

    return (
      <div className='ilearnc-body ilearnc-items'>
        {courses}
      </div>
    )
  }
})
