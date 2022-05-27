import { useState, useEffect } from 'react';
import Monthly from './Monthly';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../../Store/index";
import Weekly from './Weekly';

function Versions (){

    const year = useSelector((state:any) => state.year);
    const month = useSelector((state:any) => state.month);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[month];

    const [version, setVersion] = useState(0);

    const dispatch = useDispatch();

    const {getDate} = bindActionCreators(actionCreators, dispatch);

    getDate();

    function toMonth(){
        setVersion(0);
    }
    function toYear(){
        setVersion(1);
    }
    function toWeek(){
        setVersion(2);
    }

    if(version === 0){
        return(
            <div className='calendar__head'>
                <h1>Month : {monthName}</h1>
                <div>
                    <button onClick={toMonth}>Month</button>
                    <button onClick={toYear}>Year</button>
                    <button onClick={toWeek}>Week</button>
                </div>
                <Monthly />
            </div>
        )
    }
    else if(version === 1){
        return (
            <div className='calendar__head'>
                <h1>Year</h1>
                <div>
                    <button onClick={toMonth}>Month</button>
                    <button onClick={toYear}>Year</button>
                    <button onClick={toWeek}>Week</button>
                </div>
                <Weekly />
            </div>
        )
    }
    else if(version === 2){
        return (
            <div className='calendar__head'>
                <h1>Week</h1>
                <div>
                    <button onClick={toMonth}>Month</button>
                    <button onClick={toYear}>Year</button>
                    <button onClick={toWeek}>Week</button>
                </div>
                <Weekly />
            </div>
        )
    }
    else{
        return(
            <div>Error</div>
        )
    }
    
}

export default Versions;
