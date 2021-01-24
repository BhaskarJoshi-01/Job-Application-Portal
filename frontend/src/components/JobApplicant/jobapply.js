import React, { Component } from 'react';
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


class Jobapply extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job: [], sortedUsers: [], sortName: true, sortName1: true,
            tempjobs: [],
            sortName2: true,
            sortName3: true,
            min: 0,
            max: 0,
            job_type: ["Full Time", "Part Time", "WFH"],
            value_job_type: '',
            duration: ['0', '1', '2', '3', '4', '5', '6', '7'],
            value_duration: '',

        };
        this.renderIcon = this.renderIcon.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.onChangeminmax = this.onChangeminmax.bind(this);

    }




    componentDidMount() {
        axios.get('http://localhost:4000/user/job')
            .then(response => {
                this.setState({
                    job: response.data.filter(word => (new Date(word.deadlinedate)).getTime() > Date.now()),
                    sortedUsers: response.data.filter(word => (new Date(word.deadlinedate)).getTime() > Date.now())
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeminmax(event) {
        var arraytemp = this.state.job;
        const min_val = this.state.min;
        const max_val = this.state.max;
        var array = [];
        if (min_val > 0 && max_val) {
            for (var i = 0; i < arraytemp.length; i++) {
                if (min_val <= arraytemp[i].salary && max_val >= arraytemp[i].salary) {
                    array.push(arraytemp[i]);
                }
            }
        } else {
            if (max_val > 0) {
                for (var i = 0; i < arraytemp.length; i++) {
                    if (max_val >= arraytemp[i].salary) {
                        array.push(arraytemp[i]);
                    }
                }
            }
            else {
                if (min_val > 0) {
                    for (var i = 0; i < arraytemp.length; i++) {
                        if (min_val <= arraytemp[i].salary) {
                            array.push(arraytemp[i]);
                        }
                    }
                } else {
                    array = this.state.job;
                }
            }
        }
        this.setState({
            sortedUsers: array,
        });
    }

    sortChange(flag, id) {
        /**
         *      Note that this is sorting only at front-end.
         *      id => 1 == Salary
         *      id => 2 == Duration
         *      id => 3 == Rating
         */
        var array = this.state.job
        if (this.state.min.length > 0 || this.state.max.length > 0) {
            array = this.state.sortedUsers;
        }
        else {
            array = this.state.job;
        }
        array.sort(function (a, b) {
            if (id === 1) {
                return flag ? a.salary - b.salary : b.salary - a.salary;
            } else {
                if (id === 2) {
                    return flag ? a.duration - b.duration : b.duration - a.duration;
                } else {
                    //id == 3
                    return flag ? a.rating - b.rating : b.rating - a.rating;

                }
            }
        });
        if (id === 1) {
            this.setState({
                sortedUsers: array,
                sortName1: !this.state.sortName1,
            });
        } else {
            if (id === 2) {
                this.setState({
                    sortedUsers: array,
                    sortName2: !this.state.sortName2,
                });
            } else {
                if (id === 3) {
                    this.setState({
                        sortedUsers: array,
                        sortName3: !this.state.sortName3,
                    });
                }
            }
        }
        if (this.state.max.length == 0 &&
            this.state.min.length == 0) {
            array = this.state.job;
        }
    }

    renderIcon() {
        if (this.state.sortName) {
            return (
                <ArrowDownwardIcon />
            )
        }
        else {
            return (
                <ArrowUpwardIcon />
            )
        }
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} md={3} lg={3}>
                        <List component="nav" aria-label="mailbox folders">
                            <ListItem text>
                                <h3>Filters</h3>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                        <List component="nav" aria-label="mailbox folders">
                            <TextField
                                id="standard-basic"
                                label="Search"
                                fullWidth={true}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </List>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3} lg={3}>
                        <List component="nav" aria-label="mailbox folders">

                            <ListItem button>
                                <form noValidate autoComplete="off">
                                    <label>Salary</label>
                                    <TextField id="standard-basic" value={this.state.min}
                                        label="Enter Min" fullWidth={true} onChange={e => {
                                            this.setState({ min: e.target.value })
                                        }} />
                                    <TextField id="standard-basic" value={this.state.max}
                                        label="Enter Max" fullWidth={true} onChange={e => {
                                            this.setState({ max: e.target.value })
                                        }} />
                                    <Button sz="md" onClick={this.onChangeminmax} >
                                        [Search on min max]</Button>
                                </form>
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <Autocomplete
                                    value={this.state.value_job_type}
                                    onChange={(event, value) => {
                                        console.log(value);
                                        var val = this.state.job.filter(word => word.typeofjob == value);
                                        this.setState({
                                            sortedUsers: val,
                                            min: '',
                                            max: '',
                                            value_duration: ''
                                        });
                                    }}
                                    id="combo-box-demo"
                                    options={this.state.job_type}
                                    getOptionLabel={(option) => option}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Search Job type" variant="outlined" />}
                                />
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <Autocomplete
                                    value={this.state.value_duration}
                                    onChange={(event, value) => {
                                        console.log(value);
                                        var val = this.state.job.filter(word => word.duration == value);
                                        this.setState({
                                            sortedUsers: val,
                                            min: '',
                                            max: '',
                                            value_job_type: ''
                                        });
                                    }}
                                    id="combo-box-demo"
                                    options={this.state.duration}
                                    getOptionLabel={(option) => option}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Search Durantion" variant="outlined" />}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> <Button onClick={() => { this.sortChange(this.state.sortName1, 1) }}>{this.renderIcon(this.state.sortName1)}</Button>Salary</TableCell>
                                        <TableCell> <Button onClick={() => { this.sortChange(this.state.sortName2, 2) }}>{this.renderIcon(this.state.sortName2)}</Button>Rating</TableCell>
                                        <TableCell> <Button onClick={() => { this.sortChange(this.state.sortName3, 3) }}>{this.renderIcon(this.state.sortName3)}</Button>Duration</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Recruiter Name</TableCell>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Deadline</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.sortedUsers.map((job, ind) => (
                                        <TableRow key={ind}>
                                            <TableCell>{job.salary}</TableCell>
                                            <TableCell>{job.rating}</TableCell>
                                            <TableCell>{job.duration}</TableCell>
                                            <TableCell>{job.recruiterid}</TableCell>
                                            <TableCell>{job.recruitername}</TableCell>
                                            <TableCell>{job.title}</TableCell>
                                            <TableCell>{job.deadlinedate}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Jobapply;