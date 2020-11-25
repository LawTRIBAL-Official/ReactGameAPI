import React, { Component } from 'react';

//Statelest function
export default ({data, filterText}) => {

    // DEBUGGING console.log('We should see the data here', data)

    const gamesList = data
        .filter(games => {
            // remove names that do not match current filter text
            return games.game_name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map(games => {
            // DEBUGGIN console.log(game.game_name, game.game_id)
            return (
                <figure className="card" id={games.game_name} key={games.game_id}>
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" alt="something"/>
                    <figcaption>{games.game_name}</figcaption>
                 </figure>
            )
        })

    return (
        <div className="cards">
            {/* DEBUGGING <p>Filter Value: {this.props.filterText} </p> */}
                {gamesList}
        </div>
    );
}