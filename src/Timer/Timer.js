import React,{useState} from 'react';
import './Timer.scss';

function Timer() {
		const [timer,setTimer] = useState(0)
		function handleClick(){
			setInterval(()=>{ setTimer((timer) => timer + 1); }, 1000);
		}
	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<button onClick={handleClick}>start</button>
			<div className="Timer__value">{timer}</div>
		</div>
	)
}

export default Timer;
