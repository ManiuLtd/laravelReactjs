var initialState = [
    {
        id: 1,
        name: 'iphone 8 plus',
        price: 900,
        status: true
    },
    {
        id: 2,
        name: 'Samsung Galaxy S9',
        price: 950,
        status: false
    },
    {
        id: 3,
        name: 'Oppo 7',
        price: 400,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: 
        return [...state];
    }
}

export default products;