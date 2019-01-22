import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleRemoveTodoItem = this.handleRemoveTodoItem.bind(this);
        this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this);
    }

    handleRemoveTodoItem() {

        this.props.removeTotoItem(this.props.todo);

    }

    handleUpdateStatus() {

        this.props.updateStatus(this.props.todo);

    }

    handleEditTask() {

        this.props.submitEditingTask(this.props.todo);

    }

    render() {

        let { title, completed } = this.props.todo;

        return (
            <div>
                <ListItem className={`task-item ${completed ? 'completed-theme' : ''}`}>
                    <Checkbox
                        className="checkbox-item"
                        checked={completed}
                        onChange={this.handleUpdateStatus}
                        color="primary"
                    />
                    <ListItemText primary={title} className="todo-title" />
                    <div className="form-action-btn">
                        <IconButton aria-label="Edit" onClick={this.handleEditTask}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </div>
                    <div className="form-action-btn">
                        <IconButton aria-label="Delete" onClick={this.handleRemoveTodoItem}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </div>
                </ListItem>
                <Divider />
            </div>
        )

    }

}