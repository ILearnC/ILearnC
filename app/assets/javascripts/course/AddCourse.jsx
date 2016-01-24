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
      <div className='register'>
        <h1>添加课程</h1>
        <form action='/addcourse' method='post'>
          <div>
            <input id='titel' className='ilearn__input' name='skill[title]' placeholder='请输入课程名称' type='text' />
          </div>
          <div>
            <input id='teacher' className='ilearn__input' name='skill[teacher]' placeholder='请输入授课教师' type='text' />
          </div>
          <select value={this.state.selectskill} onChange={this._setSkillType} name='skill[skill_type]'>
            {skillList}
          </select>
          <div>
            <input id='start_date' className='ilearn__input' name='skill[start_date]' placeholder='请输入课程开始时间' type='text' />
          </div>
          <div>
            <input id='end_date' className='ilearn__input' name='skill[end_date]' placeholder='请输入课程结束时间' type='text' />
          </div>
          <div>
            <input id='head_count' className='ilearn__input' name='skill[head_count]' placeholder='请输入课程上线人数' type='text'/>
          </div>
          <div>
            <input id='description' className='ilearn__input' name='skill[description]' placeholder='请输入课程描述' type='text'/>
          </div>
          <input className='ilearn__button' name='addcourse' type='submit' value='添加'/>
        </form>
      </div>
    )
  }
})
