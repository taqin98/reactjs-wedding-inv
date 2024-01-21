import React from 'react';
import AppNature from './template_nature/AppNature';

function App() {
  const uri = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className="App">
      <AppNature />
    </div>
  );
}

export default App;
