import React, { useState, useEffect } from 'react'
import './styleProgram.css'

function Program() {
    const [hourlyWage, setHourlyWage] = useState()
    const [employee, setEmployee] = useState([
        {
            id: '001',
            name: 'Mr.A',
            position: 'Project Lead',
        },
        {
            id: '002',
            name: 'Mr.B',
            position: 'Employee',
        },
        {
            id: '003',
            name: 'Mr.C',
            position: 'Employee',
        },
    ])

    const [workTime, setWorkTime] = useState([
        {
            id: '001',
            workTimeOfTheday: 8,
            dayOfWeek: "Monday",
            timestamp: 1704042000000
        },
        {
            id: '002',
            workTimeOfTheday: 4,
            dayOfWeek: "Monday",
            timestamp: 1704042000000
        },
        {
            id: '003',
            workTimeOfTheday: 4,
            dayOfWeek: "Monday",
            timestamp: 1704042000000
        },
        {
            id: '001',
            workTimeOfTheday: 10,
            dayOfWeek: "Tuesday",
            timestamp: 1704128400000
        },
        {
            id: '002',
            workTimeOfTheday: 5,
            dayOfWeek: "Tuesday",
            timestamp: 1704128400000
        },
        {
            id: '003',
            workTimeOfTheday: 5,
            dayOfWeek: "Tuesday",
            timestamp: 1704128400000
        },
        {
            id: '001',
            workTimeOfTheday: 8,
            dayOfWeek: "Wednesday",
            timestamp: 1704214800000
        },
        {
            id: '002',
            workTimeOfTheday: 4,
            dayOfWeek: "Wednesday",
            timestamp: 1704214800000
        },
        {
            id: '003',
            workTimeOfTheday: 4,
            dayOfWeek: "Wednesday",
            timestamp: 1704214800000
        },
        {
            id: '001',
            workTimeOfTheday: 8,
            dayOfWeek: "Thursday",
            timestamp: 1704301200000
        },
        {
            id: '002',
            workTimeOfTheday: 8,
            dayOfWeek: "Thursday",
            timestamp: 1704301200000
        },
        {
            id: '003',
            workTimeOfTheday: 8,
            dayOfWeek: "Thursday",
            timestamp: 1704301200000
        },
        {
            id: '001',
            workTimeOfTheday: 8,
            dayOfWeek: "Friday",
            timestamp: 1704387600000
        },
        {
            id: '002',
            workTimeOfTheday: 8,
            dayOfWeek: "Friday",
            timestamp: 1704387600000
        },
        {
            id: '003',
            workTimeOfTheday: 8,
            dayOfWeek: "Friday",
            timestamp: 1704387600000
        },
        {
            id: '001',
            workTimeOfTheday: 4,
            dayOfWeek: "Saturday",
            timestamp: 1704474000000
        },
        {
            id: '002',
            workTimeOfTheday: 0,
            dayOfWeek: "Saturday",
            timestamp: 1704474000000
        },
        {
            id: '003',
            workTimeOfTheday: 0,
            dayOfWeek: "Saturday",
            timestamp: 1704474000000
        },
        {
            id: '001',
            workTimeOfTheday: 0,
            dayOfWeek: "Sunday",
            timestamp: 1704560400000
        },
        {
            id: '002',
            workTimeOfTheday: 10,
            dayOfWeek: "Sunday",
            timestamp: 1704560400000
        },
        {
            id: '003',
            workTimeOfTheday: 10,
            dayOfWeek: "Sunday",
            timestamp: 1704560400000
        },
        {
            id: '001',
            workTimeOfTheday: 8,
            dayOfWeek: "Monday",
            timestamp: 1704646800000
        },
        {
            id: '002',
            workTimeOfTheday: 8,
            dayOfWeek: "Monday",
            timestamp: 1704646800000
        },
        {
            id: '003',
            workTimeOfTheday: 8,
            dayOfWeek: "Monday",
            timestamp: 1704646800000
        },
        {
            id: '001',
            workTimeOfTheday: 8,
            dayOfWeek: "Tuesday",
            timestamp: 1704733200000
        },
        {
            id: '002',
            workTimeOfTheday: 8,
            dayOfWeek: "Tuesday",
            timestamp: 1704733200000
        },
        {
            id: '003',
            workTimeOfTheday: 8,
            dayOfWeek: "Tuesday",
            timestamp: 1704733200000
        },
        {
            id: '001',
            workTimeOfTheday: 0,
            dayOfWeek: "Wednesday",
            timestamp: 1704819600000
        },
        {
            id: '002',
            workTimeOfTheday: 0,
            dayOfWeek: "Wednesday",
            timestamp: 1704819600000
        },
        {
            id: '003',
            workTimeOfTheday: 0,
            dayOfWeek: "Wednesday",
            timestamp: 1704819600000
        },
    ])

    let TotalAmount = 0;

    const [test, settest] = useState({
        test: ''
    })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function payRoll(position, day, time) {
        let num = 0;
        if (position === 'Employee' && day === 'Saturday') {
            num = time * 60;
        } else if (position === 'Employee' && day === 'Sunday') {
            num = time * 100;
        } else if (position === 'Employee' && day !== 'Saturday' && day !== 'Sunday') {
            num = time * 40;
        } else if (position === 'Project Lead' && day === 'Saturday') {
            num = time * 120;
        } else if (position === 'Project Lead' && day === 'Sunday') {
            num = time * 150;
        } else if (position === 'Project Lead' && day !== 'Saturday' && day !== 'Sunday') {
            num = time * 100;
        }
        return num
    }

    useEffect(() => {
        const combinedData = employee.map(emp => {
            const workTimes = workTime.filter(wt => wt.id === emp.id);
            return {
                ...emp,
                workTimes
            };
        });
        /* console.log('combinedData', combinedData); */
        setHourlyWage(combinedData);
    }, []);

    /* useEffect(() => {
        console.log('hourlyWage', hourlyWage);
    }, [hourlyWage]); */

    return (
        <div>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>Payroll Program</div>
            <div style={{ height: '650px', display: 'flex', gap: '20px' }}>
                <div className='box_list'>
                    <div style={{ height: '80%', backgroundColor: 'rgba(0,0,0,0.4)', padding: '11px', borderRadius: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, .5)', marginBottom: '20px' }}>
                        {hourlyWage ? hourlyWage.map((e, index) => {
                            /* e.Ishow = true */
                            let Weekday = 0;
                            let Saturday = 0;
                            let Sunday = 0;

                            e.workTimes.map((e) => {
                                /* console.log('e.dayOfWeek',e.dayOfWeek); */
                                if (e.dayOfWeek === 'Saturday') {
                                    Saturday += e.workTimeOfTheday
                                } else if (e.dayOfWeek === 'Sunday') {
                                    Sunday += e.workTimeOfTheday
                                } else if (e.dayOfWeek !== 'Saturday' && e.dayOfWeek !== 'Sunday') {
                                    Weekday += e.workTimeOfTheday
                                }
                            })

                            /* console.log('Saturday',Saturday);
                            console.log('Sunday',Sunday);
                            console.log('Weekend',Weekend); */

                            e.hourInWeekday = Weekday;
                            e.hourInSaturday = Saturday;
                            e.hourInSunday = Sunday;

                            /* console.log('E>>>>>', e); */

                            if (e.position === 'Project Lead') {
                                e.priceWeekday = e.hourInWeekday * 100;
                                e.priceSaturday = e.hourInSaturday * 120;
                                e.priceSunday = e.hourInSunday * 150;
                            } else if (e.position === 'Employee') {
                                e.priceWeekday = e.hourInWeekday * 40;
                                e.priceSaturday = e.hourInSaturday * 60;
                                e.priceSunday = e.hourInSunday * 100;
                            }

                            let sum = e.priceSaturday + e.priceSunday + e.priceWeekday

                            TotalAmount += sum
                            /* console.log('TotalAmount', TotalAmount); */
                            return (
                                <div className='box_employee' style={{ backgroundColor: `${e.Ishow ? 'rgba(255, 255, 255, .7)' : '#fff'}` }}
                                    onClick={() => {
                                        e.Ishow = !e.Ishow

                                        console.log('e.Ishow', e.Ishow);
                                        setHourlyWage(hourlyWage)
                                        settest({ ...test, test: '' })
                                        test.test = ''
                                    }}>
                                    <div>
                                        <div>No.</div>
                                        <div style={{ fontSize: '50px' }}>{index + 1}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '30px' }}>Name : {e.name}</div>
                                        <div>Position : {e.position}</div>
                                    </div>
                                    {/* <div>
                                        <div>Work time in weekday : {e.hourInWeekday}</div>
                                        <div>Work time in saturday : {e.hourInSaturday}</div>
                                        <div>Work time in sunday : {e.hourInSunday}</div>
                                    </div> */}
                                    <div className='box_price'>
                                        <div>Total amount :</div>
                                        <div style={{ fontSize: '30px' }}>{numberWithCommas(e.priceSaturday + e.priceSunday + e.priceWeekday)} ฿</div>
                                    </div>
                                </div>
                            )
                        }) : <>loading...</>}
                    </div>
                    <div className='box_total_amount'>
                        Total amount :
                        <div className='box_price' style={{ width: '30%', textAlign: 'end', marginLeft: '10px' }}>{numberWithCommas(TotalAmount)} ฿</div>
                    </div>
                </div>
                <div className='box_event'>
                    <div style={{ height: '98%', overflow: 'auto', padding: '7px', width: '99%' }}>
                        {hourlyWage ? hourlyWage.map((e, index) =>
                            e.Ishow ?
                                <div className='box_event_list' style={{ height: '48%',/* width:'100%' */ }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', marginBottom: '10px' }}>
                                        <div className='box_event_no'>No : {index + 1}</div>
                                        <div style={{ fontSize: '30px' }}>Name : {e.name}</div>
                                        <div style={{ fontSize: '20px' }}>Position : {e.position}</div>
                                    </div>
                                    <div style={{ backgroundColor: 'rgba(1,1,1,0.4)', borderRadius: '15px', padding: '5px', backdropFilter: 'blur(20px)', boxShadow: '0 0 10px rgba(0, 0, 0, .5)' }}>
                                        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                            <div className='box_price_event'>
                                                <div className='name'>Work time in weekday </div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '20px' }}>
                                                    <div style={{ fontSize: '50px' }}>{e.hourInWeekday}</div>
                                                    <div style={{ fontSize: '20px', marginBottom: '5px' }}>hour</div>
                                                </div>
                                            </div>
                                            <div className='box_price_event'>
                                                <div className='name'>Work time in saturday </div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '20px' }}>
                                                    <div style={{ fontSize: '50px' }}>{e.hourInSaturday}</div>
                                                    <div style={{ fontSize: '20px', marginBottom: '5px' }}>hour</div>
                                                </div>
                                            </div>
                                            <div className='box_price_event'>
                                                <div className='name'>Work time in sunday </div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '20px' }}>
                                                    <div style={{ fontSize: '50px' }}>{e.hourInSunday}</div>
                                                    <div style={{ fontSize: '20px', marginBottom: '5px' }}>hour</div>
                                                </div>
                                            </div>
                                            <div className='box_price_event'>
                                                <div className='name'>Money received on weekdays </div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '20px' }}>
                                                    <div style={{ fontSize: '50px' }}>{numberWithCommas(e.priceWeekday)}</div>
                                                    <div style={{ fontSize: '20px', marginBottom: '5px' }}>Baht</div>
                                                </div>
                                            </div>
                                            <div className='box_price_event'>
                                                <div className='name'>Money received on saturday </div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '20px' }}>
                                                    <div style={{ fontSize: '50px' }}>{numberWithCommas(e.priceSaturday)}</div>
                                                    <div style={{ fontSize: '20px', marginBottom: '5px' }}>Baht</div>
                                                </div>
                                            </div>
                                            <div className='box_price_event'>
                                                <div className='name'>Money received on sunday </div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '20px' }}>
                                                    <div style={{ fontSize: '50px' }}>{numberWithCommas(e.priceSunday)}</div>
                                                    <div style={{ fontSize: '20px', marginBottom: '5px' }}>Baht</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: "10px", width: '100%' }}>
                                            <div className='box_price_event' style={{ width: '20%', height: 'fit-content', margin: '5px 0' }}>
                                                <div className='name'>Total amount :</div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '20px' }}>
                                                    <div style={{ fontSize: '50px' }}>{numberWithCommas(e.priceSaturday + e.priceSunday + e.priceWeekday)}</div>
                                                    <div style={{ fontSize: '20px', marginBottom: '5px' }}>Baht</div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', overflow: 'auto', height: 'fit-content', gap: '10px', padding: '5px 0 ' }}>
                                                {e.workTimes.map((e2, index) => {
                                                    let date = new Date(e2.timestamp);
                                                    return (
                                                        <div className='box_price_event'>
                                                            <div style={{ width: '100px', height: '45px', backgroundColor: '#fff', color: '#000', padding: '0px 5px', borderRadius: '10px' }}>{e2.dayOfWeek}
                                                                <div>{date.toLocaleDateString('en-US', { day: '2-digit', month: 'long' })}</div>
                                                            </div>
                                                            <div style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', gap: '10px' }}>
                                                                {e2.workTimeOfTheday}
                                                                <div style={{ fontSize: '15px', marginBottom: '2px' }}>hour</div>
                                                            </div>
                                                            <div style={{ textAlign: 'end' }}>
                                                                {payRoll(e.position, e2.dayOfWeek, e2.workTimeOfTheday)} Baht
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                :
                                <>
                                </>
                        ) : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program