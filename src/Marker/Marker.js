import React, {  useState } from "react";
import "./Marker.scss";

function Marker() {
  const [items, setItems] = useState([
    "First item",
		"Second special item",
		"Third item",
		"Fourth special item",
  ]);
  const originialItems=["First item",
  "Second special item",
  "Third item",
  "Fourth special item"]
  
setTimeout(function(){ render() }, 0);

  function editArray(event){
    
    let arr=originialItems.map(markIt)
    function markIt(item) {
      // alert(e.target.value)
      if (event.target.value!=""){
        item=item.replaceAll(event.target.value,`<span class='marker'>${event.target.value}</span>`)
      }
        return item 
      }
      setItems(arr)
      }
  function render(){
    for (var i=0;i<items.length;i++){
      document.getElementById(i).innerHTML=items[i]
    }
  }
  
  return (
    
    <div className="Marker">
      <p>
        Display a list of all items in the state.
        <br />
        If the value in the input can be found within the items -{" "}
        <span className="marker">marker</span> it.
        <br />
        Example: if the input value is "elf" then item "shelf" should look like:
        sh<span className="marker">elf</span>. Apply the marker for{" "}
        <u>all items</u>.
      </p>

      <input type="text" placeholder="Text to marker..." onChange={editArray}  />
      <ul>
        
      </ul>
      <ul>
        {items.map((item, index) => {
          return<li id={index}></li>
        })}

      </ul>
    </div>
  );
}

export default Marker;
