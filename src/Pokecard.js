import React, {Component} from 'react';

const Poke_Api = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

class Pokecard extends Component {
    
    render() {
        let imgSrc= `${Poke_Api}${this.props.id}.png`
        return(
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>Pokemon</h1>
                <div className='Pokecard-image'>
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div className='PokeCard-data'> Type: {this.props.type}</div>
                <div className='PokeCard-exp'> Exp: {this.props.exp} </div>
            </div>
        )
    }
}

export default Pokecard;