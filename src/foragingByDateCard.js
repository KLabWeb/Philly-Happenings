import React from "react";
import "./App.css";

export const ForagingByDateCard = props => {
  return (
    <div key={Math.random()} className="forageCard">
      {props.data.type && <h2 className="forageTitle">{props.data.type}</h2>}
      <ul className="forageList">
        {props.data.items.map(data => {
            return (
              <li key={Math.random()} className="forageItem">{data}</li>
            );
        })}
      </ul>
    </div>
  )
};

export default ForagingByDateCard;
