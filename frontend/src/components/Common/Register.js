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
            education: this.state.education,
            skill: this.state.skill,
            contact: this.state.contact,
            bio: this.state.bio
        }
        axios.post('http://localhost:4000/user/register', newUser)
            .then(res => {
                alert("User " + res.data.FirstName + " " + res.data.LastName + " Created ");
            })
            .catch(err => {
                if (err.response.status === 400) {
                    alert("Error in saving ! Please try again later");
                }
                else {
                    alert("You are already registered!");
                }
            });

        this.setState({
            type: 'JobApplicant',
            FirstName: '',
            LastName: '',
            email: '',
            password: '',
            date: null,
            education: [],
            skill: [],
            contact: '',
            bio: '',
            usr: 'true'
        });
    }


    render() {
        const usr = this.state.usr;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div>

                            <h3>Email: </h3>
                        </div>
                        <div>

                            <input type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <div>
                            <h3>Type: </h3>
                        </div>

                        <select className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}>
                            <option value="JobApplicant">Job Applicant </option>
                            <option value="Recruiter">Recruiter </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div>

                            <h3>FirstName: </h3>
                        </div>

                        <input type="text"
                            placeholder="First Name"
                            className="form-control"
                            value={this.state.FirstName}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <h3>LastName: </h3>
                        <input type="text"
                            placeholder="Last Name"

                            className="form-control"
                            value={this.state.LastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>


                    <div className="form-group">
                        <h3>Password: </h3>
                        <input type="password"
                            placeholder="Password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div>

                        {!usr
                            ?
                            <Recruiter />
                            : <Applicant />
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