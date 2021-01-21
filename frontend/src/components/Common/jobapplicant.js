import React, { Component } from 'react';
import axios from 'axios';

export default class Applicant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            education: [],
            skill: [],
        }
        this.onChangeEducation = this.onChangeEducation.bind(this);
        this.onChangeSkill = this.onChangeSkill.bind(this);
        this.onDeleteEducation = this.onDeleteEducation.bind(this);
        this.onDeleteSkill = this.onDeleteSkill.bind(this);
        this.onAddEducation = this.onAddEducation.bind(this);
        this.onAddSkill = this.onAddSkill.bind(this);

    }

    onChangeEducation(index, obj) {

        this.setState({

            education: this.state.education.map((obj1, index1) => {
                return index === index1 ? obj : obj1;
            }),
        });
    }

    onAddEducation(obj) {
        this.setState({

            education: [...this.state.education, obj],

        });

    }

    onDeleteEducation(index) {
        this.setState({

            education: this.state.education.filter((obj1, index1) =>
                index1 !== index

            ),
        });

    }
    onChangeSkill(index, obj) {

        this.setState({

            skill: this.state.skill.map((obj1, index1) => {
                return index === index1 ? obj : obj1;
            }),
        });
    }

    onAddSkill(obj) {
        this.setState({

            skill: [...this.state.skill, obj],

        });

    }

    onDeleteSkill(index) {
        this.setState({

            skill: this.state.skill.filter((obj1, index1) =>
                index1 !== index

            ),
        });

    }

    render() {
        return (
            <div>
                

                <div className="form-group">
                    <div>
                        <label>Education: </label>
                    </div>
                    <div>
                        <button
                            style={{ margin: "8px" }}
                            onClick={(e) => {
                                e.preventDefault();
                                this.onAddEducation("");
                            }}
                        >
                            Add
                        </button>
                    </div>
                    {this.state.education.map((obj, id) => {
                        return (
                            <div>
                                <div>
                                    <h3>
                                        Name of Institute :
                                </h3>
                                </div>
                                <div>
                                    <input
                                        required
                                        value={obj.institute}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            this.onChangeEducation(id, {
                                                ...obj,
                                                institute: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                                <div>

                                    <h3>
                                        Starting Year:
                                    </h3>
                                </div>
                                <div>

                                    <input
                                        required
                                        type="number"
                                        max="2035"
                                        min="1980"
                                        value={obj.startYear}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            this.onChangeEducation(id, {
                                                ...obj,
                                                startYear: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                                <div>

                                    <h3>
                                        Ending Year:
                                    </h3>
                                </div>
                                <div>

                                    <input
                                        required
                                        type="number"
                                        max="2035"
                                        min="1980"
                                        value={obj.endYear}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            this.onChangeEducation(id, {
                                                ...obj,
                                                endYear: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                                <div>

                                    <button
                                        style={{ marginTop: "8px" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.onDeleteEducation(id);
                                        }}
                                    >
                                        Delete
                                </button>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className="form-group">
                    <label>Skill: </label>
                    <div>

                        <button
                            style={{ marginLeft: "8px" }}
                            onClick={(e) => {
                                e.preventDefault();
                                this.onAddSkill("");
                            }}
                        >
                            Add
                    </button>
                    </div>
                    {this.state.skill.map((obj, id) => {
                        return (
                            <div>
                                <label>Language: </label>
                                <input
                                    required
                                    value={obj.langugage}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        this.onChangeEducation(id, {
                                            ...obj,
                                            language: e.target.value,
                                        });
                                    }}
                                />


                                <div>

                                    <button
                                        style={{ marginTop: "8px" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.onDeleteSkill(id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>


                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}