import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import "./st.css";


function App (){
    return (
        <>
        <h1>Курс валют</h1>
<table>
<thead>
		<tr>
        <th>Назва валюти</th>
			<th>Курс до гривні</th>
			<th>абривіатура</th>
        </tr>
	</thead>
    <tbody> 
        {data.map((elem)=> {
            return (
            <tr>
            <td>{elem.txt}</td>
            <td>{elem.rate}</td>
            <td>{elem.cc}</td>
            </tr>
            )
    
        })}
        </tbody>
        </table>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('body'));