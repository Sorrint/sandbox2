import React, { useState, useEffect } from 'react';
import getStandingsCurrent from '../../../api/standings';

export const Results = (props) => {
    const [table, setTable] = useState();

    useEffect(() => {
        getStandingsCurrent().then((data) => {
            setTable(data.StandingsLists[0].DriverStandings);
        });
    }, []);

    return (
        <>
            {table && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Позиция</th>
                            <th>Пилот</th>
                            <th>Конюшня</th>
                            <th>Количество очков</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((position) => (
                            <tr key={position.position} className="border-solid">
                                <td>{position.position}</td>
                                <td>
                                    {position.Driver.givenName} {position.Driver.familyName}
                                </td>
                                <td>{position.Constructors[0].name}</td>
                                <td>{position.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};
