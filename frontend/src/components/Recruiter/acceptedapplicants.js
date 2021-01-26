import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Fuse from 'fuse.js';
import { RecruiterNavBar } from '../templates/Navbar'
import ls from 'local-storage'

class Acceptedapplicants extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],


        };

    }

    onChangeRating = (job,app) => (e) => {
        // console.log("entered here");
        axios.post('http://localhost:4000/user/ratingfromrec', {
            userid: app.applicant_id,
            jobtitle: job.title,
            rating: Number(e.target.value)
        }).then(() => { window.location.reload() }).catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount() {
        // const jobtitle = window.location.pathname.split('/')[2];
        // console.log(jobtitle);
        axios.get('http://localhost:4000/user/acceptedapplicants/' + ls.get("currentuser"))
            .then(response => {
                console.log("HI");
                console.log(response.data);
                let apps = [];
                for (const job of response.data) {
                    for (const app of job.application) {
                        if (app.status == "Accepted") {
                            apps.push({ job, app })
                        }
                    }
                }
                console.log(apps);
                this.setState({

                    list: apps
                });
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        return (
            <div>
                <RecruiterNavBar />
                <Grid item xs={12} md={9} lg={9}>
                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Applicant Name</TableCell>
                                    <TableCell>Job Title</TableCell>
                                    <TableCell>Job Type </TableCell>
                                    <TableCell>DOJ</TableCell>
                                    <TableCell>Rate</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.list.map((temp, ind) => {
                                    const { job, app } = temp;
                                    return (
                                        <TableRow key={ind}>
                                            <TableCell>{app.applicantname}</TableCell>
                                            <TableCell>{job.title}</TableCell>
                                            <TableCell>{job.typeofjob}</TableCell>
                                            <TableCell>{job.postingdate}</TableCell>
                                            <TableCell>
                                                <input type="number"
                                                    min="1"
                                                    max="5"
                                                    value={app.ratingfromrec}
                                                    onChange={this.onChangeRating(job,app)}
                                                />
                                            </TableCell>



                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </div>
        )
    }
}
export default Acceptedapplicants;




