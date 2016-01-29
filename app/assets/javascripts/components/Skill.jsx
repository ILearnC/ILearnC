let Skill = React.createClass({
  propTypes: {
    skill: React.PropTypes.object
  },

  render: function () {
    styleItem = {
      backgroundImage: 'url('+'/assets/images/default.png'+')',
      height: 200,
      backgroundSize: 'cover'
    }
    return (
      <div className='ilearnc-layout'>
        <div className='ilearnc-layout--item'>
          <div className='img-rounded item-image' style={styleItem}>
            <div className='item-description'>{this.props.skill.description}</div>
          </div>
          <div>
            <div>{this.props.skill.title}</div>
            <div>上课老师：{this.props.skill.teacher}</div>
            <div>开课时间：{this.props.skill.start_date}</div>
            <div>结课时间：{this.props.skill.end_date}</div>
            <div>班级人数：{this.props.skill.head_count}</div>
          </div>
        </div>
      </div>
    )
  }
})
