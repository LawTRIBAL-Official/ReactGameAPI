import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import GamesList from './components/GamesList';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterText: ''
        }
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    render() {

        // DEBUGGING console.log('filterText state from parent component', this.state.filterText)

        return (
            <div className="App">
                <div className="wrapper">
                    <Search
                        filterText={this.state.filterText}
                        filterUpdate={this.filterUpdate.bind(this)}
                    />
                        <GamesList
                            data={this.props.data}
                            filterText={this.state.filterText}
                        />
                </div>
            </div>
        )
    }
}

export default App;
