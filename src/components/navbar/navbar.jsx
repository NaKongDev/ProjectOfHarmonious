import React from 'react'
import './navbar.css';
import { CreditCardOutlined } from '@ant-design/icons';

function Navbar({ mode, setMode }) {
  return (
    <nav className='body'>
      <div className='logo'>
        <CreditCardOutlined style={{
          transform:'rotate(-30deg)'
        }} />
        <div >Payroll Program</div>
      </div>
      <div style={{ display: 'flex', gap: '10px', height: '50px', alignItems: 'center', marginRight:'50px' }}>
        <div className='button'
          onClick={() => {
            setMode('home')
          }}
        >Payroll Program</div>
        <div className='button'
          onClick={() => {
            setMode('HourlyWage')
          }}
        >Hourly Wage</div>
      </div>
      
    </nav>
  )
}

export default Navbar