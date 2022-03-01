import React, { Component } from 'react';
import '../css/Movie.css';
import { ReactPropTypes } from 'prop-types';

class Movie extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="movie-body">
				<ul className="mov"> Movie:</ul>
				<li>{this.props.title}</li>
				<li> {this.props.description}</li>
				<li> {this.props.year}</li>
				<li> {this.props.genre}</li>
			</div>
		);
	}
}

// Movie.propTypes = {
//     title: ReactPropTypes.string,
//     description: ReactPropTypes.string,
//     year: ReactPropTypes.number,
//     genre: ReactPropTypes.string

//   };

Movie.defaultProps = {
	title: 'title',
	description: 'description',
	year: 2022,
	genre: 'genre'
};

export default Movie;
