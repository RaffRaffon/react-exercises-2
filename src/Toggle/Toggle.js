import React, { useState }from 'react';
import logo from './logo.svg';
import './Toggle.scss';

function Toggle() {
	const image=require('./logo.svg')
	const [logo,setLogo] = useState()
	function handleClick(){
		if (logo===image){
			setLogo(undefined)
		} else {
			setLogo(image)
		}
	}
	
	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={handleClick}>Show / Hide</button>
			<div className="Toggle__logo-wrapper">
				<img src={logo}  />
			</div>
		</div>
	)
}

export default Toggle;
