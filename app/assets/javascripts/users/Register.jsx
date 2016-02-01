let Register = React.createClass({
  render: function () {
    return (
      <div id='register' className='modal fade' role='dialog'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal'>&times;</button>
                <h4 className='modal-title'>欢迎注册</h4>
              </div>
              <form action='/create' method='post' className='col-md-6'>
                <div>
                  <input id='name' className='form-control ilearn__input'
                    name='user[name]' placeholder='请输入用户名' type='text' />
                </div>
                <div>
                  <input id='email' className='form-control ilearn__input'
                    name='user[email]' placeholder='请输入邮箱' type='text' />
                </div>
                <div>
                  <input id='password' className='form-control ilearn__input'
                    name='user[password]' placeholder='请输入密码' type='password' />
                </div>
                <input className='btn btn-primary btn-block' name='register' type='submit' value='注册'/>
              </form>
              <div className='modal-footer'>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
})
