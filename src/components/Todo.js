import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import {Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoList from '../components/TodoList';
import { addTodoToList, fetchTodosThunk } from '../reducers/thunks';
import { addTodo, fetchTodos} from '../actions/index';

const mapStateToProps = (state) =>{
    return {
        todoList : state.todos
    };  
}
class Todo extends Component{

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const text = this.refs.todoinput.getValue()
        this.props.dispatch(addTodo(text))
    }

    componentWillMount(){
        this.props.dispatch(fetchTodos())
    }

    render(){
        const  {todoList}  = this.props
        return(
            <MuiThemeProvider>
                <MuiThemeProvider>
                    <Row center="xs" >
                        <Row xs>
                        <Col xs={12}>
                            <TextField 
                                floatingLabelText="Add a todo"
                                ref="todoinput"/>
                        </Col>
                        
                        <Col xs={12}>
                            <RaisedButton label="Add" primary={true} onClick={this.handleClick.bind(this)}/>
                        </Col>

                        <Col xs={12}>
                            <TodoList  todoList={ todoList.todos }/>
                        </Col>
                        </Row>
                    </Row>
                </MuiThemeProvider>
            </MuiThemeProvider>
        );

    }
}

export default connect(mapStateToProps)(Todo);