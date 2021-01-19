import React,{useState} from 'react';
import './RealNumber.scss';

function RealNumber() {
		const [show,setShow] = useState(false)
		
		function sendLogic(e){
			setShow(false)
			var includesStrings=false
			for (var char of e.target.value){
				if (isNaN(char/1)){
					console.log(char)
					includesStrings=true
				}
			}
			if (includesStrings===false){
				setShow(true)
			}
			if (e.target.value===""){
				setShow(false)
			}
		}
	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" onChange={sendLogic}/>
		{show && <button >Submit</button>}
		</div>
	)
}

export default RealNumber;
