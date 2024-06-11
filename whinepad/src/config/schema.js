import classification from "./classification";

const schema = {
    name: {
        label: 'Name',
        show: true,
        samples: ['$2 Chuck', 'Chateau React', 'Vint.js'],
        align: 'left',
    },
    year: {
        label: 'Year',
        type: 'year',
        show: true,
        samples: [2015, 2013, 2021],
    },
    gape: {
        label: 'Grape',
        type: 'suggest',
        options: classification.grapes,
        show: true,
        samples: ['Merlot', 'Bordeaux Blend', 'Zinfandel'],
        align: 'left',
    },
    rating: {
        label: 'Rating',
        type: 'rating',
        show: true,
        samples: [3, 1, 5],
    },
    comments: {
        label: 'Comments',
        type: 'textarea',
        samples: ['Nice for the price', 'XML in my JS, only??!', 'Lodi? Again!'],
    },
};

export default schema;