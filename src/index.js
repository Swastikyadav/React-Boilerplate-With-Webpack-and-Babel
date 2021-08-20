import React from 'react';
import ReactDOM from 'react-dom';
 
const title = 'React Setup With Webpack and Babel';
 
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

module.hot.accept();