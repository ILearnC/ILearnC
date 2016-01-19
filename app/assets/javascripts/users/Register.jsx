var Register = React.createClass({
  render: function () {
    return (
      <div className='register'>
        <h1>欢迎注册</h1>
        <form action='/create' method='post'>
          <div>
            <input id='name' className='ilearn__input' name='user[name]' placeholder='请输入用户名' type='text' />
          </div>
          <div>
            <input id='email' className='ilearn__input' name='user[email]' placeholder='请输入邮箱' type='text' />
          </div>
          <div>
            <input id='password' className='ilearn__input' name='user[password]' placeholder='请输入密码' type='password' />
          </div>
          <input className='ilearn__button' name='register' type='submit' value='注册'/>
        </form>
      </div>
    )
  }
})
