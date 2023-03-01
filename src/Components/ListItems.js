import React from "react";
import FlipMove from "react-flip-move";
import "../Components/ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    <div class="scrollbar" id="style-1">
    <div class="force-overflow"></div>
  </div>
    return (
      <FlipMove>
      
      <div className="list" key={item.key}>
        <p>
          <input type="text" 
          id={item.key} 
          value={item.text} 
          onChange ={
            (e) => {
              
              props.setUpdate(e.target.value,item.key)
            }
          }
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
      </FlipMove>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;

