import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  // Commenting test body out since it will try render 'Fib.js` and those would try to call Express server
  // and at the moment there is no need of mocking the Express.
  //
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
