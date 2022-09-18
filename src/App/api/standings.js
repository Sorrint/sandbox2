var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const getStandingsCurrent = async () => {
    const url = 'http://ergast.com/api/f1/current/driverStandings.json';
    let request = await fetch(url, requestOptions);
    let response = await request.text();
    let data = await JSON.parse(response);
    let result = data.MRData.StandingsTable;
    return new Promise((resolve, reject) => {
        resolve(result);
    });
};

export default getStandingsCurrent;
