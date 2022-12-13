import React from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <h1 className='underline'> hello world </h1>
    </div>
  );
}

export default App;
