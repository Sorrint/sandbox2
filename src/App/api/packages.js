const packages = {
    bucket30L: {
        order: 1,
        description: '45кг железо',
        volume: '30L',
        countInRow: 6,
        material: 'iron'
    },
    bucket15L: {
        order: 2,
        description: '30 кг бан',
        volume: '15L',
        countInRow: 11,
        material: 'iron'
    },
    bucketPlastic20L: {
        order: 3,
        description: '22, 25, 30 кг',
        volume: '20L',
        weight: 0.745,
        countInRow: 8,
        material: 'plastic'
    },
    bucketPlastic15L: {
        order: 4,
        description: '20 кг',
        volume: '20L',
        weight: 0.57,
        countInRow: 11,
        material: 'plastic'
    },
    bucket10L: {
        order: 5,
        description: '14 кг железо',
        volume: '10L',
        countInRow: 11,
        material: 'iron'
    },
    bucketPlastic11L: {
        order: 6,
        description: '10, 12, 14 кг',
        volume: '11.3L',
        weight: 0.4,
        countInRow: 11,
        material: 'plastic'
    },
    canister10L: {
        order: 7,
        description: '10 кг кан',
        volume: '10L',
        weight: 0.38,
        countInRow: 20,
        material: 'plastic'
    },
    bucketPlastic6L: {
        order: 8,
        description: '6, 7, 8 кг',
        volume: '5.7L',
        weight: 0.18,
        countInRow: 18,
        material: 'plastic'
    },
    canister5L: {
        order: 10,
        description: '4,5 кг кан',
        volume: '4.5L',
        weight: 0.21,
        countInRow: 34,
        material: 'plastic'
    },
    bottle5L: {
        order: 9,
        description: '5 л бут',
        volume: '5.0L',
        weight: 0.105,
        countInRow: 40,
        material: 'plastic'
    },
    bucketPlastic3L: {
        order: 11,
        description: '3,5 кг выс',
        volume: '3.3L',
        weight: 0.13,
        countInRow: 30,
        material: 'plastic'
    },
    soloBucketPlastic3L: {
        order: 12,
        description: '2,8 Solo',
        volume: '3.0L',
        weight: 0.13,
        countInRow: 34,
        material: 'plastic'
    },
    bucketPlastic2L: {
        order: 13,
        description: '2,5, 3 кг низ',
        volume: '2.25L',
        weight: 0.09,
        countInRow: 30,
        material: 'plastic'
    },
    bucketPlastic1L: {
        order: 14,
        description: '1, 1,2, 1,5 кг',
        volume: '1.0L',
        weight: 0.055,
        countInRow: 54,
        material: 'plastic'
    },
    soloBucketPlastic1L: {
        order: 15,
        description: '1, 1,4 Solo',
        volume: '1.0L',
        weight: 0.05,
        countInRow: 70,
        material: 'plastic'
    },
    another: {
        order: 16,
        description: 'прочее',
        weight: 0.01,
        material: 'plastic'
    },
    tintingPaste: {
        order: 17,
        description: 'ПЭТ',
        weight: 0.01,
        countInRow: 500,
        material: 'plastic'
    },
    bonus: {
        order: 18,
        description: 'довложение'
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(packages);
        }, 2000);
    });

export default {
    fetchAll
};
