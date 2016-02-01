let Datepicker = React.createClass({
  propTypes: {
    name: React.PropTypes.String,
    message: React.PropTypes.String,
    datepickerId: React.PropTypes.String
  },

  _setDatepicker: function () {
    $('#'+this.props.datepickerId).datetimepicker({
      format: 'YYYY-MM-DD'
    });
  },

  render: function () {
    return (
      <div className='form-group'>
        <div className='input-group date' id={this.props.datepickerId} onClick={this._setDatepicker}>
          <input type='text' className='form-control'
            placeholder={this.props.message} name={this.props.name}/>
          <span className='input-group-addon'>
            <span className='glyphicon glyphicon-calendar'></span>
          </span>
        </div>
      </div>
    )
  }
})
