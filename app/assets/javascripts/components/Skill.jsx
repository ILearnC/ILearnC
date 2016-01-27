let Skill = React.createClass({
  propTypes: {
    skill: React.PropTypes.object
  },

  render: function () {
    return (
      <div className='ilearnc-layout'>
        <div className='ilearnc-layout--item'>
          <img src='/assets/images/default.png' className='img-rounded ilearnc-thumbnail'/>
          <div>
            <div>{this.props.skill.title}</div>
            <div>{this.props.skill.description}</div>
          </div>
        </div>
      </div>
    )
  }
})
