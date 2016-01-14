var _ = require('lodash');
var React = require('react');
var Skill = require('./skill');

module.exports = React.createClass({
    render: function () {
        var category = this.props.category;
        var skills = this.props.skills;

        return (
            <div className="categorical-skills-panel row">
                <div className="category col-md-12">
                    {category}
                </div>
                <div className="skills-panel col-md-12">
                    <div className="row">
                        {
                            skills.map(function (skill) {
                                return (
                                    <Skill skill={skill} key={_.uniqueId('skill-')}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
});