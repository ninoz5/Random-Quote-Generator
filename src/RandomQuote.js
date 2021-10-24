import React, { Component, PropTypes } from 'react';

class RandomQuote extends Component {
	

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className= 'quote'  style = {{'color': this.props.color}}>
				<i className="fas fa-quote-left"></i>
				<span  id= 'text'>{this.props.quote}</span> <br/>
				<span   id = 'author'>- {this.props.author}</span>
			</div>
			);
	}
}

export default RandomQuote;
