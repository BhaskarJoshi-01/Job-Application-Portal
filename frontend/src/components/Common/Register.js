import React, { Component } from 'react';
import axios from 'axios';
import Recruiter from './recruter'
import Applicant from './jobapplicant'
export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: 'JobApplicant',
            FirstName: '',
            LastName: '',
            email: '',
            password: '',
            date: null,
            usr: true
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeFirstName(event) {
        this.setState({ FirstName: event.target.value });
    }
    onChangeLastName(event) {
        this.setState({ LastName: event.target.value });
    }

    onChangeType(event) {
        this.setState({ type: event.target.value });
        var vr = 0;
        vr = 1 - this.state.usr;
        this.setState({ usr: vr });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }



    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            type: this.state.type,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            email: this.state.email,
            password: this.state.password,
            date: Date.now(),
            education:this.state.education,
            skill:this.state.skill,
            contact:this.state.contact,
            bio:this.state.bio
            
        }
        axios.post('http://localhost:4000/user/register', newUser)
            .then(res => {
                alert("User " + res.data.FirstName + " " + res.data.LastName + "Created ");
                //  console.log(res.data)
            })
            ;

        this.setState({
            type: '',
            FirstName: '',
            LastName: '',
            email: '',
            password: '',
            date: null
        });
    }

    render() {
        const usr = this.state.usr;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <select className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}>
                            <option value="Applicant">Job Applicant </option>
                            <option value="Recruiter">Recruiter </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>FirstName: </label>
                        <input type="text"
                            placeholder="First Name"
                            className="form-control"
                            value={this.state.FirstName}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>LastName: </label>
                        <input type="text"
                            placeholder="Last Name"

                            className="form-control"
                            value={this.state.LastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>


                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                            placeholder="Password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div>
                        {usr
                            ? <Applicant />
                            : <Recruiter />
                        }
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}