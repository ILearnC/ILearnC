let Login = React.createClass({
  render: function () {
    return (
      <div className='image'>
        <form action='/homepage' method='get'>
          <div className='ilearn__login'>
            <div><label>欢迎登录</label></div>
            <div className='input-group margin-bottom-sm'>
              <span className='input-group-addon'><i className='fa fa-envelope-o fa-user'></i></span>
                <input className='form-control' name='name' type='text' placeholder='请输入用户名' />
            </div>
            <br />
            <div className='input-group margin-bottom-sm'>
              <span className='input-group-addon'><i className='fa fa-envelope-o fa-key'></i></span>
                <input className='form-control' name='password' type='password' placeholder='请输入密码' />
            </div>
            <br />
            <div>
              <div>
                <input id='login' className='btn btn-primary btn-block' type="submit" value="登录" />
              </div>
              <div className='ilearn__register'>
                <a href='/register'>立即注册</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
})
