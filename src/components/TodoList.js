import React, { Component } from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card';
import SubHeader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class TodoList extends Component{
    
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
                        {this.props.todoList.map(function(todo, i) {
                            return(
                            <div>
                                <ListItem
                                    primaryText={
                                        <p>{todo}</p>
                                    }/>
                                <Divider inset={true} />
                            </div>
                            );
                        })}  
                    </List>
                </Card>
            </MuiThemeProvider>
        );
    }
}
