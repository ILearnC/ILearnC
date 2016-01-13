var _ = require('lodash');
var React = require('react');
var HeroPanel = require('./hero-panel');
var CategoricalSkillsPanel = require('./categorical-skills-panel');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            categories: {
                "Learning Skill": [
                    {
                        image: '/assets/images/css.jpg',
                        title: 'CSS'
                    },
                    {
                        image: '/assets/images/ruby.jpg',
                        title: 'Ruby'
                    }
                ],
                "Leisure Skill": [
                    {
                        image: '/assets/images/maoyi.jpg',
                        title: 'Zhi mao yi'
                    }
                ]
            }
        }
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div className="homepage">
                <HeroPanel />
                <div className="container">
                    {
                        _.map(this.state.categories, function (skills, category) {
                            return <CategoricalSkillsPanel category={category} skills={skills}/>
                        })
                    }
                </div>
            </div>
        );
    }
});