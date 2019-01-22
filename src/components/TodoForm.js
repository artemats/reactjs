import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

export class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTaskValue: ''
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleAddNewTask = this.handleAddNewTask.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:4000/todo')
            .then(responce => responce.json())
            .then(({data}) => {
                console.log(data);
            })
            .catch(error => console.log('wrong in parse - ', error));
    }

    componentDidUpdate(nextProps, nextState) {

        setTimeout(function () {

            if(nextProps.editingTask !== this.props.editingTask) {

                this.setState({
                    newTaskValue: this.props.editingTask.title
                });

            }

        }.bind(this), 100);

    }

    handleAddNewTask(event) {

        event.preventDefault();

        if(this.state.newTaskValue !== '') {

            this.props.editingTask.title = this.state.newTaskValue;

            this.props.addNewTask(this.state.newTaskValue, this.props.editingTask);

            this.setState({
                newTaskValue: ''
            });

        }

    }

    handleChangeValue(event) {

        this.setState({
            newTaskValue: event.target.value
        });

    }

    render() {

        return(
            <div>
                <form autoComplete="off" onSubmit={this.handleAddNewTask}>
                    <div className="form-container">
                        <TextField
                            label="Add new task"
                            value={this.state.newTaskValue || ''}
                            onChange={this.handleChangeValue}
                            margin="normal"
                            fullWidth
                        />
                        <div className="action-btn">
                            <IconButton aria-label="Send" type="submit">
                                <SendIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </div>
                </form>
            </div>
        )

    }

}

TodoForm.propTypes = {
  editingTask: PropTypes.object
};