import React,{useState} from 'react';
import './Todo.scss';

function Todo() {
	
		const [items,setItems] = useState([])
		const [item,setItem] = useState()
		var arr=[...items]
		function handleChange(e){
			setItem(e.target.value)
			// return e.target.value
		}
		function pushItem(){
			arr.push(item)
			setItems(arr)
			console.log(arr)
		}
		function erase(index) {
			console.log(index)
			let newArr=[...arr]
			newArr.splice(index,1)
			setItems(newArr)
		}
	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<input placeholder="Your task..." onChange={handleChange}/> 
			<button onClick={pushItem}>Add task</button>
			<ul>
			{items.map((item, index) => {
						return <li key={index}><button onClick={erase.bind(this,index)}>X</button>{item}</li>;
					})}
			</ul>
		</div>
	)
}


export default Todo;
