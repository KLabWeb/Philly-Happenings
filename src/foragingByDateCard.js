import React from "react";
import "./App.css";

export const ForagingByDateCard = props => {
  return (
    <div className="forageCard">
      {props.data.type && <h2 className="forageTitle">{props.data.type}</h2>}
      <ul className="forageList">
        {props.data.items.map(forageName => {
            return (
              <li key={forageName} className="forageItem">{forageName}</li>
            );
        })}
      </ul>
    </div>
  )
};

export default ForagingByDateCard;
