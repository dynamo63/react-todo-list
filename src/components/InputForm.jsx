import React, { Component, createRef } from 'react';
import { Box, TextField, Select, MenuItem, Button, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../scss/inputForm.scss';


class InputForm extends Component {

    constructor(props) {
        super(props);
        this.inputRef = createRef();
        this.selectRef = createRef();
        this.state = { text: '' , grade: 0};
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
        console.log(this.selectRef.current.value);
    }

    handleChange = value => {
        this.setState({ text: value })
    }

    render() {

        return (
            <>
                <IconButton aria-label="return">
                    <ArrowBackIcon />
                </IconButton>
                <Box component="form" onSubmit={this.handleSubmit}>
                    <TextField variant="outlined" label="Title of the Task" inputRef={this.inputRef} fullWidth />
                    <ReactQuill modules={this.modules}>
                        <div className="my-editor" value={this.state.text} onChange={this.handleChange}></div>
                    </ReactQuill>
                    <Select defaultValue={0} inputRef={this.selectRef}>
                        <MenuItem value={0}>Aucun</MenuItem>
                        <MenuItem value={1}>Facile</MenuItem>
                        <MenuItem value={2}>Important</MenuItem>
                        <MenuItem value={3}>Urgent</MenuItem>
                    </Select>
                    <br/>
                    <Button variant="contained" color="primary" type="submit" size="large">
                        ADD
                    </Button>
                </Box>
            </>
        );
    }
}

export default InputForm;