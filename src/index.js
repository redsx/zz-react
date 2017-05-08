// import React, {Component} from 'react';
// import DOM, { render } from 'react-dom';

// class Test extends Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return <div data-time = {this.props.time}>test</div>
//     }
// }
// function tick() {
//     render(
//         <Test time = {new Date()}/>,
//         document.getElementById('app')
//     );
// }
// setInterval(tick,1000);

import react from './React';


const div3 = react.createElement(
    'div',
    null,
    'div3',
    'div3 text'
)
const div2 = react.createElement(
    'div',
    null,
    'div2',
    'div2 text',
    div3
)
const div1 = react.createElement(
    'div',
    {
        key: 1,
        className: 'test',
        style: {
            textAlign: 'center',
            color: 'red',
        }
    },
    'div1',
    div2
)


react.render(
    div1,
    document.getElementById('app')
);