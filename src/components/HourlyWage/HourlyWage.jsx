import React, { useState } from 'react'
import './styleHourlyWage.css'

function HourlyWage() {
    const [hourlyWage, setHourlyWage] = useState([
        {
            position: 'Project Lead',
            amount: [
                {
                    day: 'Sunday',
                    money: '150'
                },
                {
                    day: 'Monday',
                    money: '100'
                },
                {
                    day: 'Tuesday',
                    money: '100'
                },
                {
                    day: 'Wednesday',
                    money: '100'
                },
                {
                    day: 'Thursday',
                    money: '100'
                },
                {
                    day: 'Friday',
                    money: '100'
                },
                {
                    day: 'Saturday',
                    money: '120'
                },
            ],
        },
        {
            position: 'Employee',
            amount: [
                {
                    day: 'Sunday',
                    money: '100'
                },
                {
                    day: 'Monday',
                    money: '40'
                },
                {
                    day: 'Tuesday',
                    money: '40'
                },
                {
                    day: 'Wednesday',
                    money: '40'
                },
                {
                    day: 'Thursday',
                    money: '40'
                },
                {
                    day: 'Friday',
                    money: '40'
                },
                {
                    day: 'Saturday',
                    money: '60'
                },
            ],
        }
    ])

    return (
        <div>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>Hourly wage</div>
            {hourlyWage ? hourlyWage.map((e) => {
                return (
                    <div className='box_content'>
                        <div className='box_position'>Position : {e.position}</div>
                        <div style={{ width:'100%' }}>
                            <div style={{display: 'flex', gap: '10px',overflow:'auto',padding:'10px'}}>
                            {e.amount.map((e2) => {
                                return (
                                    <div className='box_money'>
                                        <div className='box_day'>{e2.day}</div>
                                        <div style={{ display: 'flex', fontSize: '50px', justifyContent: 'flex-end', alignItems: 'flex-end', gap:'15px' }}>
                                            {e2.money}
                                            <div style={{ fontSize: '15px', marginBottom:'5px' }}>Money/hour</div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                )
            }) : <></>}
        </div>
    )
}

export default HourlyWage