import React, { Component } from 'react';
import '../css/Collections.css';
import Movie from './Movie';

class Collections extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<div>
					<h2>Check Out Some Interesting Movies</h2>
					<Movie
						title="The Martian"
						description="An astronaut becomes stranded on
          Mars after his team assume him dead, and must rely on his ingenuity to
          find a way to signal to Earth that he is alive"
						year="2015"
						genre="Sci-fi/adventure"
					/>
					<Movie
						title="Ledgends of the Falls"
						description="Based on the 1979 novella of the same title by Jim Harrison, the film is about three brothers and their father living in the wilderness and plains of Montana"
						year="1994"
						genre="War/drama"
					/>
					<Movie
						title="End Game"
						description="Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
						year="2019"
						genre="Sci/Fi"
					/>
					<Movie
						title="Remember the Titans"
						description="The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit."
						year="2000"
						genre="drama/sport"
					/>
					<Movie
						title="Good Will Hunting"
						description="The film follows 20-year-old South Boston janitor Will Hunting (Damon), an unrecognized genius who, as part of a deferred prosecution agreement after assaulting a police officer, becomes a patient of a therapist (Williams) and studies advanced mathematics with a renowned professor (Skarsgård). Through his therapy sessions, Will re-evaluates his relationships with his best friend (Affleck), his girlfriend (Driver), and himself, facing the significant task of confronting his past and thinking about his futur"
						year="1997"
						genre="drama/romance"
					/>
				</div>

				<div>
					<button className="button">Add</button>
				</div>
			</div>
		);
	}
}

export default Collections;
