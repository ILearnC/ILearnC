var React = require('react');

module.exports = React.createClass({
    render: function () {
        var skill = this.props.skill;

        return (
            <div className="skill col-md-3">
                <div className="skill-image">
                    <img src={skill.image}/>
                </div>
                <div className="skill-title">{skill.title}</div>
            </div>
        );
    }
});
