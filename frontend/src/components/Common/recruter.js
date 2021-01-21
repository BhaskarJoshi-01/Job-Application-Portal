import React, { Component } from 'react';
import axios from 'axios';

export default class Recruiter extends Component {

    constructor(props) {
        super(props);

        this.state = {

            contact: null,
            bio: null,

        }
        // this.onChangeEmail = this.onChangeEmail.bind(this);
        // this.onChangePassword = this.onChangePassword.bind(this);
        // this.onChangeType = this.onChangeType.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeContact(event) {
        this.setState({ contact: event.target.value });
    }
    onChangeBio(event) {
        this.setState({ bio: event.target.value });
    }

    render() {
        return (
            <div>

                <div className="form-group">
                    <label>Contact: </label>
                    <input type="tel"
                    placeholder="Phone-Number"
                    pattern="[0-9]{10}"
                        className="form-control"
                        value={this.state.contact}
                        onChange={this.onChangeContact}
                    />
                </div>
                <div className="form-group">
                    <label>Bio: (max 250 words) </label>
                    <textarea
                        className="form-control"
                        maxLength="250"
                        value={this.state.bio}
                        onChange={this.onChangeBio}
                    />
                </div>


            </div>
        )
    }
}