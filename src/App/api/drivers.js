var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const getDriversCurrent = async () => {
    const url = 'http://ergast.com/api/f1/2022/drivers.json';
    let request = await fetch(url, requestOptions);
    let response = await request.text();
    let data = await JSON.parse(response);
    let result = data.MRData.DriverTable;
    return new Promise((resolve, reject) => {
        resolve(result);
    });
};

export default getDriversCurrent;
