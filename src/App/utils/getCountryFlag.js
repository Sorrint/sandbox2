const getCountryflag = (country) => {
    if (country === 'UK') {
        country = 'gbr';
    }
    if (country === 'UAE') {
        country = 'ae';
    }
    return `https://countryflagsapi.com/png/${country}`;
};

export default getCountryflag;
