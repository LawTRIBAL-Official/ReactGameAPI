import React, { Component } from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('https://localhost:44336/api/Gaming')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <div className="wrapper">
                    <h2><strong>Games<span>( 4 )</span></strong></h2>
                    <div className="cards">

                        {/* Main cards */}
                        {items.map(item => (
                            <figure className="card" key={item.game_id}>
                                <img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />
                                <figcaption>{item.game_name}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        );

    }

}

export default App;
