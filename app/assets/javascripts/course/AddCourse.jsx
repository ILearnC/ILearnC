let AddCourse = React.createClass({
  propTypes: {
    skilltypes: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      selectskill: this.props.skilltypes[0].id
    }
  },

  _setSkillType: function (event) {
    this.setState({
      selectskill: event.target.value
    })
  },

  render: function () {
    let skillList = this.props.skilltypes.map(skilltype => {
      return <option value={skilltype.id} key={skilltype.id}>{skilltype.typename}</option>
    })

    return (
      <div className='ilearnc-body'>
        <form action='/addcourse' method='post' className='col-md-6'>
          <h1>添加课程</h1>
          <input id='titel' className='form-control ilearn__input'
            name='skill[title]' placeholder='请输入课程名称' type='text' />

          <input id='teacher' className='form-control ilearn__input'
            name='skill[teacher]' placeholder='请输入授课教师' type='text' />

          <select className='form-control ilearn__input'
            value={this.state.selectskill} onChange={this._setSkillType} name='skill[skill_type]'>
            {skillList}
          </select>

          <Datepicker message='请输入课程开始时间 2014-01-12' name='skill[start_date]' datepickerId='start_date'/>

          <Datepicker message='请输入课程结束时间 2015-01-22' name='skill[end_date]' datepickerId='end_date'/>
          <input id='head_count' className='form-control ilearn__input'
            name='skill[head_count]' placeholder='请输入课程上线人数' type='text'/>

          <textarea rows='3' id='description' className='form-control ilearn__input'
            name='skill[description]' placeholder='请输入课程描述' type='text'/>
          <input className='btn btn-primary btn-block' name='addcourse' type='submit' value='添加'/>
        </form>
      </div>
    )
  }
})
