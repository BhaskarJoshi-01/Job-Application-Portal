import React, { Component } from 'react';
import axios from 'axios';

export default class Applicant extends Component {

    constructor(props) {
        super(props);

        this.state = {
          
            education: [{ 
                institute:null,
                startyear:null,
                endyear:null
            }],
            skill: [{
                language:null
                
            }],
            
        }
        this.onChangeEducation = this.onChangeEducation.bind(this);
        this.onChangeSkill = this.onChangeSkill.bind(this);
    }

    onChangeEducation(event) {
        this.setState({ education: event.target.value });
    }
    onChangeSkill(event) {
        this.setState({ skill: event.target.value });
    }
    
    render() {
        return (
            <div>
            
                    <div className="form-group">
                        <label>Education: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.education}
                            onChange={this.onChangeEducation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Skill: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.skill}
                            onChange={this.onChangeSkill}
                        />
                    </div>
            </div>
        )
    }
}