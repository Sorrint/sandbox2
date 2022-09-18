import React, { useEffect, useState } from 'react';
import getScheduleCurrent from '../../../api/schedule.js';
import addZero from '../../../utils/addZero.js';
import formatDate from '../../../utils/dateFormat.js';
import getCountryflag from '../../../utils/getCountryFlag.js';

export const Schedule = () => {
    const [table, setTable] = useState();

    useEffect(() => {
        getScheduleCurrent().then((data) => {
            setTable(data.Races);
        });
    }, []);

    return (
        <>
            {table &&
                table.map((race) => (
                    <div key={race.raceName} className="race-card font-mono text-lg" role="button">
                        <div className="race-card__round">R{addZero(race.round)}</div>
                        <div className="race-card__location-wrapper">
                            <div className="race-card__flag">
                                <img
                                    className="race-card__flag-image"
                                    src={getCountryflag(race.Circuit.Location.country)}
                                    alt="flag"
                                ></img>
                            </div>
                            <div className="race-card__country">{race.Circuit.Location.country}</div>
                            <div className="race-card__location">{race.Circuit.Location.locality}</div>
                        </div>
                        <div className="race-card__info">
                            <div className="race-card__race">
                                Race
                                <div className="race-card__data">{formatDate(race.date)}</div>
                                <div className="race-card__time">{race.time}</div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};
