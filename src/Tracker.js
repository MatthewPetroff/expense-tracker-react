import React from 'react';
import Form from './Form.js';

function add() {
	console.log('Adding');
}

function Tracker() {
	return (
		<div>
			<Form />
			<table>
				<thead>
				  	<tr>
				    	<th>ID</th>
				    	<th>DATE</th>
				    	<th>DESCRIPTION</th>
				    	<th>LOCATION</th>
				    	<th>AMOUNT</th>
				    	<th>DELETE</th>			    	
				  	</tr>
				</thead>
				<tbody>  	
				  	<tr>
				    	<td>001</td>
				    	<td>09/12/2020</td>
				    	<td>Rent</td>
				    	<td>Apex Apartments</td>
				    	<td>700</td>
				    	<td>X</td>			    	
				  	</tr>
				  	<tr>
				    	<td>002</td>
				    	<td>09/13/2020</td>
				    	<td>Utilities</td>
				    	<td>Duke Energy</td>
				    	<td>100</td>
				    	<td>X</td>			    	
				  	</tr>
				  	<tr>
				    	<td>003</td>
				    	<td>09/15/2020</td>
				    	<td>Groceries</td>
				    	<td>Kroger</td>
				    	<td>80</td>
				    	<td>X</td>			    	
				  	</tr>				  	
			  	</tbody>
			</table>
			<button onClick={add}>Add Expense</button>
		</div>
	)		
}

export default Tracker;