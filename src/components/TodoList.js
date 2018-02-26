import React, { Component } from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card';
import SubHeader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class TodoList extends Component{
    removeItem = this.props.removeTodo

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(index, event){
        console.log("clicking", this.props)
        this.props.removeTodo(index)
    }

    eachItem = (todo, i) =>{

        console.log("clicking",this.props)
        return(
            <div>
                <ListItem
                    primaryText={<p>{todo}</p>}
                    onClick={this.handleClick.bind(this, i)}
                    key={i}
                    index={i}/>
                <Divider inset={true} />
            </div>
        );
    }
    render(){
        console.log("in todolist", this.props)
        var divStyle = {
            margin: 20,
        }
        return(
            <MuiThemeProvider>
                <Card style={divStyle}>
                    <List>
                        <SubHeader>MyTodo List</SubHeader>
                        {this.props.todoList.map(this.eachItem, this)}  
                    </List>
                </Card>
            </MuiThemeProvider>
        );
    }
}
