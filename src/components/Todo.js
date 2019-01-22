import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

const todoList = [
    {
        id: "0",
        title: "Wake up",
        completed: true
    },
    {
        id: "1",
        title: "Breakfast",
        completed: false
    },
    {
        id: "2",
        title: "Go to office",
        completed: false
    },
    {
        id: "3",
        title: "Coding",
        completed: true
    },
    {
        id: "4",
        title: "Drink coffee",
        completed: false
    }
];

export class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: todoList,
            editingTask: {}
        };
        this.removeTotoItem = this.removeTotoItem.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.submitEditingTask = this.submitEditingTask.bind(this);
    }

    // componentDidUpdate() {
    //
    //     console.log('did update component');
    //
    // }

    removeTotoItem(todoItem) {

        let index = this.state.todoList.indexOf(todoItem);

        this.setState({
           todoItem: this.state.todoList.splice(index, 1)
        });

    };

    updateStatus(todoItem) {

        todoItem.completed = !todoItem.completed;

        this.setState({
            todoList: this.state.todoList
        });

    }

    addNewTask(newTaskValue, editingTask) {

        let newTask = {};

        if(!this.state.todoList.find(i => i.id === editingTask.id)) {

            newTask.id = this.state.todoList.length;
            newTask.title = newTaskValue;
            newTask.completed = false;

            this.setState({
                todoList: [...this.state.todoList, newTask]
            });

        } else {

            this.setState({
                todoList: this.state.todoList,
                editingTask: {}
            });

        }

    }

    submitEditingTask(editingTask) {

        this.setState({
            editingTask: editingTask
        });

    }

    render() {

        const { todoList, editingTask } = this.state;

        return(
            <div>
                <Paper className="defaultFormWrap">
                    <Typography variant="h2" gutterBottom>
                        Todo app
                    </Typography>
                    <TodoForm addNewTask={this.addNewTask} editingTask={editingTask} />
                    <List component="nav">
                        { todoList.map((todo, index) => {
                            return <TodoItem
                                todo={todo}
                                key={index}
                                removeTotoItem={this.removeTotoItem}
                                updateStatus={this.updateStatus}
                                submitEditingTask={this.submitEditingTask}
                            />
                        })}
                    </List>
                </Paper>
            </div>
        )

    }

}