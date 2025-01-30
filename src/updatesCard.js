import React from "react";
import "./App.css";

export const UpdatesCard = props => {
    return (
        <div>
            <h4>{props.data.header}</h4>
            {props.data.categoryUpdateLists.map(list => {
                return (
                    <div key={list.type}>
                        <p>{list.type}</p>
                        <ul>
                            {list.updateList && list.updateList.map(updateList => 
                                <li key={Math.random()}>
                                    {"href" in updateList ? (
                                        <a href={updateList.href} target="_blank" rel="noreferrer">{updateList.label}</a>
                                    ) : (
                                        <p>{updateList.label}</p>
                                    )}
                                </li>
                            )}  
                        </ul>
                    </div>
            )
            })}
        </div>
    )
}

export default UpdatesCard;