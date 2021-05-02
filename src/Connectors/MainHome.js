
import React, {useEffect, useState} from "react";
import '../App.css';
import Events from "./Main";
import MainH from "../Connectors/MainHome";
import axios from "axios";

import {Link, NavLink, Route, Router,Switch} from "react-router-dom";
import {isCalendarType} from "react-calendar/dist/umd/shared/propTypes";

const MainHome =()=>{
    const [conference,setConference] = useState([]);

    const getConferenceData = async ()=> {
        try{
            const data = await axios.get('http://localhost:4000/app/readDetails');
            console.log(data.data);
            setConference(data.data);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(()=>getConferenceData(),[]);


    return(

        <div className="card-01">


            <br>{}</br>
            <h1>Welcome</h1>

            <br>{}</br>

            <Link to="/event"><h3>New Conferance</h3></Link>
                <Switch>
                    <Route path="/event">
                        <Events/>
                    </Route>
                </Switch>

            <br>{}</br><br>{}</br>
            <div className="card">
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Type</th>
                            <th scope="col">Host's email</th>
                            <th scope="col">Date</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Quantity</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            conference.map((item)=>{
                            return(
                            <tr>
                                <th scope="row">{item.title}</th>
                                <td>{item.about}</td>
                                <td>
                                   Presentation and Workshop
                                </td>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                                <td>{item.from}</td>
                                <td>{item.to}</td>
                                <td>{item.place}</td>
                                <td>{item.amount}</td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


}
export default MainHome;
