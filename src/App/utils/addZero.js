const addZero = (number) => {
    if (number > 0 && number < 10) {
        number = '0' + number;
    }
    return number;
};

export default addZero;
