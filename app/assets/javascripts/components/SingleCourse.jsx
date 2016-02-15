let SingleCourse = React.createClass({
  propTypes: {
    skill: React.PropTypes.object
  },

  render: function () {
    return (
      <div className='ilearnc-body singlecourse'>
        <div className='col-md-6'>
          <img src='/assets/images/default.png' className='img-thumbnail' />
        </div>
        <div clasName='col-md-6'>
          <h1>{this.props.skill.title}</h1>
          <div>开课时间：{this.props.skill.start_date}</div>
          <div>结课时间：{this.props.skill.end_date}</div>
          <div>班级人数：{this.props.skill.head_count}/人</div>
          <a className='btn btn-primary'>报名</a>
        </div>
        <div className='col-md-12 singlecourse-description'>
          <h1>简介</h1>
          <hr />
          {this.props.skill.description}
        </div>
      </div>
    )
  }
})
