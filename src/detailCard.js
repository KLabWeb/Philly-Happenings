import React from "react";
import "./App.css";

export const DetailCard = props => {
  return (
    <div key={Math.random()} className="card">
      {props.data.title && <h2 className="title">{props.data.title}</h2>}
      {props.data.summary && <p className="summary">{props.data.summary}</p>}
      {props.data.mainLink && <a className="link" target="_blank" rel="noreferrer" href={props.data.mainLink}>{props.data.mainLink}</a>}
      {props.data.subLink && <a className="link" target="_blank" rel="noreferrer" href={props.data.subLink}>{props.data.subLink}</a>}
      {props.data.insta && <a className="link" target="_blank" rel="noreferrer" href={props.data.insta}>{props.data.insta}</a>}
      {props.data.facebook && <a className="link" target="_blank" rel="noreferrer" href={props.data.facebook}>{props.data.facebook}</a>}
      {props.data.twitter && <a className="link" target="_blank" rel="noreferrer" href={props.data.twitter}>{props.data.twitter}</a>}
      {props.data.suggestedFollow && <p className="suggestedFollow"><b>Suggested Follow: </b> {props.data.suggestedFollow}</p>}
    </div>
  )
};

export default DetailCard;
