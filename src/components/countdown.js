import React, { Component } from 'react';
import moment from 'moment';

export default class Countdown extends Component{
	render(){
		return(
			<div>
			  <iframe width="350" height="180" src="https://w2.countingdownto.com/1999645" frameborder="0"></iframe>
			</div>
		)
	}
}