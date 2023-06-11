const getCountryAbb = (country) => {
    switch (country) {
        case 'Bahrain':
            return 'bh';
        case 'Saudi Arabia':
            return 'sa';
        case 'Australia':
            return 'au';
        case 'Italy':
            return 'it';
        case 'United States':
        case 'USA':
            return 'us';
        case 'Spain':
            return 'es';
        case 'Monaco':
            return 'mc';
        case 'Azerbaijan':
            return 'az';
        case 'Canada':
            return 'ca';
        case 'UK':
            return 'gb';
        case 'Austria':
            return 'at';
        case 'France':
            return 'fr';
        case 'Hungary':
            return 'hu';
        case 'Belgium':
            return 'be';
        case 'Netherlands':
            return 'nl';
        case 'Singapore':
            return 'sg';
        case 'Japan':
            return 'jp';
        case 'Mexico':
            return 'mx';
        case 'Brazil':
            return 'br';
        case 'UAE':
            return 'ae';
        case 'Qatar':
            return 'qa';
        default:
            break;
    }
};

const getCountryflag = (country) => {
    const abb = getCountryAbb(country);

    return `https://img.geonames.org/flags/x/${abb}.gif`;
};

export default getCountryflag;
