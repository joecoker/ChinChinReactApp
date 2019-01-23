import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CocktailListItem extends Component {

  render() {
    const address = '/cocktail/' + this.props.cocktail.name
    return (
      <div className='cocktail-item'><Link to={address}>
        <div><img class='thumbnail' src='https://www.seriouseats.com/recipes/images/2015/04/20150323-cocktails-vicky-wasik-negroni-1500x1125.jpg' alt='negroni' /></div>
        <div class='name'>{this.props.cocktail.name}</div>
        <div class='base'>{this.props.cocktail.ingredients[0].ingredient}</div></Link>
      </div>
    )
  }
}

export default CocktailListItem;
