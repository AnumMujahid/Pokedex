import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Dex.css';
export class Dex extends Component {
  render() {
    return (
      <div className="Dex">
        <h4 className={this.props.isWinner ? 'Dex-winner' : 'Dex-loser'}>
          {this.props.isWinner ? 'WINNER' : 'LOSER'}
        </h4>
        <p>Total Experience: {this.props.exp}</p>

        <div className="Dex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Dex;
