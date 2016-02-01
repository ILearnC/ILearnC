let BarCourse = React.createClass({
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
      <div className='col-md-12 barcourse'>
        <div className='col-md-3 barcourse--img'>
          <a href={'allcourse/'+this.props.skill.id}>
            <img src='/assets/images/default.png' className='img-rounded' />
          </a>
        </div>
        <div className='col-md-9'>
          <a href={'allcourse/'+this.props.skill.id}>{this.props.skill.title}</a>
          <div>开课时间：{this.props.skill.start_date}</div>
          <div>结课时间：{this.props.skill.end_date}</div>
          <div>班级人数：{this.props.skill.head_count}/人</div>
          <div className='barcourse--description'>{this.props.skill.description}</div>
        </div>
      </div>
    )
  }
})
