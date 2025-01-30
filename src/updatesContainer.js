import React, { useState } from 'react';
import './App.css';
import { UPDATES } from './updatesData';
import { UpdatesCard } from './updatesCard';

const dateNow = new Date();
const dateTwoMonthsAgo = dateNow.setMonth(dateNow.getMonth() - 2);
const newUpdatesOnly = UPDATES.filter(data => new Date(data.header) > dateTwoMonthsAgo);

export const Updates = () => {
    const [showOldUpdates, setShowOldUpdates] = useState(false)
    const [buttonText, setButtonText] = useState("Show all updates")

    const clickHandler = show => {
        setShowOldUpdates(show);
        setButtonText(show ? "Hide old updates" : "Show all updates")
    }

    return (
        <div className="updates">
            <h1 id="updates" className="category">Recent Updates</h1>
            <div className="updatesCardContainer">
                {showOldUpdates ? (
                    UPDATES.map(data => (
                        <UpdatesCard key={data.header} data={data} />
                    ))
                ): (
                    newUpdatesOnly.map(data => (
                        <UpdatesCard key={data.header} data={data} />
                    ))
                )
                }

                <button className="updatesButton" onClick = {() => clickHandler(!showOldUpdates)}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Updates;