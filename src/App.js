import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/navbar'
import Program from './components/Program/Program';
import HourlyWage from './components/HourlyWage/HourlyWage';
import { useState, useEffect } from 'react';

function App() {
  
  const [mode, setMode] = useState('home')

  return (
    <div style={{ minHeight: '100vh', width: '100%', }}>
      <Nav
        mode = {mode}
        setMode = {setMode}
      />
      <div style={{ margin: '0 20px 0 30px' }}>
        {/* <div style={{ display: 'flex', gap: '10px', height: '50px', alignItems: 'center' }}>
          <h4 className='button'
            onClick={() => {
              setMode('home')
            }}
          >Home</h4>
          <h4 className='button'
            onClick={() => {
              setMode('HourlyWage')
            }}
          >Hourly Wage</h4>
        </div> */}
        {mode === 'home' ?
          <Program></Program> :
          <></>
        }
        {mode === 'HourlyWage' ?
          <HourlyWage></HourlyWage> :
          <></>
        }
      </div>

    </div>
  );
}

export default App;
