import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
              Welcome to Valo - The Job Applicant Portal
              Click Register/Login to continue !!
           </div>
        )
    }
}