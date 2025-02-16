import React, { useState } from 'react'
import './navbar.css';
import { CreditCardOutlined } from '@ant-design/icons';

function Navbar({ mode, setMode }) {
  return (
    <nav className='body'>
      <div style={{ display: 'flex', gap: '20px', marginLeft: '2%', backgroundColor:'#fff',  padding:'10px 15px', borderRadius:'10px', color:'#000' }}>
        <CreditCardOutlined style={{
          fontSize: '40px',
          transform:'rotate(-30deg)'
        }} />
        <div style={{fontSize: '30px'}}>Payroll Program</div>
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