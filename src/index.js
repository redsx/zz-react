// import React, {Component} from 'react';
// import DOM, { render } from 'react-dom';

import react from './React';
react.render(
    react.createElement(
        'div',
        {
            key: 1,
            className: 'test',
            style: {
                textAlign: 'center',
                color: 'red',
            }
        },
        'test1',
        'test2'
    ),
    document.getElementById('app')
);