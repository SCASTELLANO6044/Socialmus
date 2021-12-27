import React from 'react';
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <h1>Socialmus</h1>
      <button className='ui icon red button'>
        <i className='user icon'/>CSS Button
      </button>
      <Button icon='user' content='React Button' color='green' loading='true' />
    </div>
  );
}

export default App;
