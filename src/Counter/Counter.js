import React,{useState} from 'react';
import './Counter.scss';

function Counter() {
	const [counter,setCounter] = useState(0)
	function handleClick(){
	setCounter(counter+1)
	}
	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={handleClick}>Increase</button>
			<div className="Counter__value">{counter}</div>
		</div>
	)
}

export default Counter;
