import React from 'react';

function Form() {
	return (
		<div>
			<input type="date" id="date"/>
			<input type="text" id="desc" placeholder="Description (e.g. Rent)"/>
			<input type="text" id="location" placeholder="Location (e.g. Apex Apartments)"/>
			<input type="number" id="amount" placeholder="Amount in dollars"/>
		</div>		
	)
}

export default Form;