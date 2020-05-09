import React, { Component, createRef } from 'react';
import { Box, TextField, Button, IconButton, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../scss/inputForm.scss';
import { connect } from 'react-redux';
import { addTask } from '../redux';


class InputForm extends Component {

    constructor(props) {
        super(props);
        this.inputRef = createRef();
        this.state = { text: '' , grade: "0"};
        this.modules = {
            toolbar: [
                [{ 'header': 1 }, { 'header': 2 }],
                ['code-block'],
                ['bold'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }]
            ]
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const task = {
            id:Math.floor(Math.random() * (109 - 4) + 4),
            title: this.inputRef.current.value,
            grade: parseInt(this.state.grade),
            completed: false
        };
        this.props.addTask(task);

    }

    handleChange = value => {
        this.setState({ text: value })
    }

    handleChangeGrade = e => {
        this.setState({ grade: e.target.value})
    }

    render() {

        return (
            <>
                <IconButton aria-label="return">
                    <ArrowBackIcon />
                </IconButton>
                <Box component="form" onSubmit={this.handleSubmit}>
                    <TextField variant="outlined" label="Title of the Task" inputRef={this.inputRef} fullWidth />
                    <ReactQuill modules={this.modules} value={this.state.text} onChange={this.handleChange}>
                        <div className="my-editor" value={this.state.text} onChange={this.handleChange}></div>
                    </ReactQuill>
                    <RadioGroup row={true} name="grade" value={this.state.grade} onChange={this.handleChangeGrade} >
                        <FormControlLabel value="1" control={<Radio/>} label="Facile" labelPlacement="start"/>
                        <FormControlLabel value="2" control={<Radio/>} label="Important" labelPlacement="start"/>
                        <FormControlLabel value="3" control={<Radio/>} label="Urgent" labelPlacement="start"/>
                    </RadioGroup>
                    <br/>
                    <Button variant="contained" color="primary" type="submit" size="large">
                        ADD
                    </Button>
                </Box>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (task) => dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(InputForm);