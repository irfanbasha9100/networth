import { useLocation} from "react-router-dom";
//import axios from "axios";
//import { useEffect, useState } from "react";
const Repo = (props)=>{
    
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData)
    return (
        <div style={{textAlign:"center",paddingTop:30,paddingBottom:30}}>
            <h1 style={{paddingBottom:30}}>Dashboard</h1> 
            <h2>Forks Count : {propsData.forks}</h2>
            <h2>Open Issues : {propsData.open_issues_count}</h2>
        </div>
    )
}
export default Repo