import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'

import { setSearchField } from "../actions";


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchFieldield
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       onSearchChange: (event) => dispatch(setSearchField(event.target.value))
   }
   };

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));

    }


    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return !robots.left ?
            <h1>Loading </h1> :
            (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <Searchbox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);