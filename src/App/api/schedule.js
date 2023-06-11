var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const getScheduleCurrent = async () => {
    const url = `https://ergast.com/api/f1/2023.json`;
    let request = await fetch(url, requestOptions);
    let response = await request.text();
    let data = await JSON.parse(response);
    let result = data.MRData.RaceTable;
    return new Promise((resolve, reject) => {
        resolve(result);
    });
};

export default getScheduleCurrent;
