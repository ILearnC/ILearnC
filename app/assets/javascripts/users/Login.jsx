let Login = React.createClass({
  render: function () {
    return (
      <div className='image'>
        <form action='/homepage' method='get'>
          <div className='ilearn__login'>
            <div><label>欢迎登录</label></div>
            <div>
              <input className='ilearn__input' name='name' placeholder='请输入用户名' type="text" />
            </div>
            <div>
              <input className='ilearn__input' name="password" placeholder="请输入用户名" type="password"/>
            </div>
            <div>
              <div>
                <input id='login' className='ilearn__button' type="submit" value="登录" />
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
