import React from 'react';
import ReactDOM from 'react-dom';
window.React=React; //!!import


import RemoteView from './components/remote-view';

var node={hello:'world'};

ReactDOM.render(<RemoteView url='/remote/remote.alpha.js' node={node}/>,document.getElementById('root'));