import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../../Store/index";
import './Monthly.scss'


function Monthly(){

    const date = useSelector((state:any) => state.date);
    const day = useSelector((state:any) => state.day);
    const year = useSelector((state:any) => state.year);
    const month = useSelector((state:any) => state.month);
    const numberOfDays = new Date(year, month +1, 0).getDate();
    const lastMonthNumberOfDays = new Date(year, month, 0).getDate();
    const firstDay = (7 + (day - (date-1)%7))%7;
    const lastDay = firstDay + ((numberOfDays - 1)%7);
    const [loader, setLoader] = useState(true);

    

    let days : {theDay : number, theDate : number, theMonth : number}[] = [];
    // adding date of the month
    for(let i:number = 0; i< numberOfDays; i++){
        let newDay = {"theDay" : (firstDay + i )%7, "theDate" : i+1, "theMonth" : month};
        days.push(newDay);
    }
    
    // adding date of the last month to fill the space
    let numberOfDaysBefore:number = firstDay;
    if(numberOfDaysBefore ===0){
        numberOfDaysBefore = 6;
    }
    else{
        numberOfDaysBefore -= 1;
    }
    
    for(let j:number =0; j< numberOfDaysBefore; j++){
        let newDay = {"theDay" : (7 + (firstDay-1 -j ))%7, "theDate" : lastMonthNumberOfDays - j, "theMonth" : month -1};
        days.unshift(newDay);
    }
    // adding date of the next month to fill the space
    let numberOfDaysAfter:number = 7 - lastDay;
    
    for(let j:number =0; j< numberOfDaysAfter; j++){
        let newDay = {"theDay" : (7 + (lastDay + 1 + j ))%7, "theDate" : 1 + j, "theMonth" : month +1};
        days.push(newDay);
    }
    

    const dispatch = useDispatch();

    const {getDate} = bindActionCreators(actionCreators, dispatch);

    useEffect(() =>{
        const interval = setInterval(() => getDate(),  1000);
        return () => {
            clearInterval(interval);
        }
    })

    useEffect(() =>{
        const interval = setInterval(() => setLoader(false),  1000);
        return () => {
            clearInterval(interval);
        }
    }, [])
    
    if(loader === true){
        return(
            <div>ok</div>
        )
    }
    else{
        return ((
            <div className="calendar__body">
                <div className="calendar__body__weekDay monday">
                    <h1 className="calendar__body__weekDay-title">Monday</h1>
                    {days.map(({theDay, theDate, theMonth}) => (
                        theDay === 1 
                        ?  (
                            theMonth === month 
                            ? (
                                <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class' + ((date === theDate && month === theMonth) ? (" today") : "")}>
                                    <h1>{theDate} </h1>
                                </div>
                            )
                            :   <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class otherMonths'}>
                                    <h1>{theDate} </h1>
                                </div>
                        )
                        : null
                    ))}
                </div>
                <div className="calendar__body__weekDay tuesday">
                    <h1 className="calendar__body__weekDay-title">Tuesday</h1>
                    {days.map(({theDay, theDate, theMonth}) => (
                        theDay === 2 
                        ?  (
                            theMonth === month 
                            ? (
                                <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class' + ((date === theDate && month === theMonth) ? (" today") : "")}>
                                    <h1>{theDate} </h1>
                                </div>
                            )
                            :   <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class otherMonths'}>
                                    <h1>{theDate} </h1>
                                </div>
                        )
                        : null
                    ))}
                </div>
                <div className="calendar__body__weekDay wednesday">
                    <h1 className="calendar__body__weekDay-title">Wednesday</h1>
                    {days.map(({theDay, theDate, theMonth}) => (
                        theDay === 3 
                        ?  (
                            theMonth === month 
                            ? (
                                <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class' + ((date === theDate && month === theMonth) ? (" today") : "")}>
                                    <h1>{theDate} </h1>
                                </div>
                            )
                            :   <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class otherMonths'}>
                                    <h1>{theDate} </h1>
                                </div>
                        )
                        : null
                    ))}
                </div>
                <div className="calendar__body__weekDay thursday">
                    <h1 className="calendar__body__weekDay-title">Thursday</h1>
                    {days.map(({theDay, theDate, theMonth}) => (
                        theDay === 4 
                        ?  (
                            theMonth === month 
                            ? (
                                <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class' + ((date === theDate && month === theMonth) ? (" today") : "")}>
                                    <h1>{theDate} </h1>
                                </div>
                            )
                            :   <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class otherMonths'}>
                                    <h1>{theDate} </h1>
                                </div>
                        )
                        : null
                    ))}
                </div>
                <div className="calendar__body__weekDay friday">
                    <h1 className="calendar__body__weekDay-title">Friday</h1>
                    {days.map(({theDay, theDate, theMonth}) => (
                        theDay === 5 
                        ?  (
                            theMonth === month 
                            ? (
                                <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class' + ((date === theDate && month === theMonth) ? (" today") : "")}>
                                    <h1>{theDate} </h1>
                                </div>
                            )
                            :   <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class otherMonths'}>
                                    <h1>{theDate} </h1>
                                </div>
                        )
                        : null
                    ))}
                </div>
                <div className="calendar__body__weekDay saturday">
                    <h1 className="calendar__body__weekDay-title">Saturday</h1>
                    {days.map(({theDay, theDate, theMonth}) => (
                        theDay === 6 
                        ?  (
                            theMonth === month 
                            ? (
                                <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class' + ((date === theDate && month === theMonth) ? (" today") : "")}>
                                    <h1>{theDate} </h1>
                                </div>
                            )
                            :   <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class otherMonths'}>
                                    <h1>{theDate} </h1>
                                </div>
                        )
                        : null
                    ))}
                </div>
                <div className="calendar__body__weekDay sunday">
                    <h1 className="calendar__body__weekDay-title">Sunday</h1>
                    {days.map(({theDay, theDate, theMonth}) => (
                        theDay === 0 
                        ?  (
                            theMonth === month 
                            ? (
                                <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class ' + ((date === theDate && month === theMonth) ? (" today") : "")}>
                                    <h1>{theDate} </h1>
                                </div>
                            )
                            :   <div key={theDate + theMonth} id={"d" + theDate + "m" + theMonth} className={"calendar__body__weekDay-date " + theDay + 'Class otherMonths'}>
                                    <h1>{theDate} </h1>
                                </div>
                        )
                        : null
                    ))}
                </div>
            </div>
        ))
    }
    
}

export default Monthly;