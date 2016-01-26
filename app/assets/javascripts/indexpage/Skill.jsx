let Skill = React.createClass({
  propTypes: {
    skill: React.PropTypes.object
  },

  render: function () {
    return (
      <div className='col-md-3 col-sm-6 img-rounded'>
        <img src='/assets/images/default.png' className='img-rounded ilearnc-thumbnail'/>
        <div>
          <div>{this.props.skill.title}</div>
          <div>{this.props.skill.description}</div>
        </div>
      </div>
    )
  }
})
