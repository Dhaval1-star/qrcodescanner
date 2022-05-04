import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './apicall.css'

function Apicall() {

    let [data , setdata] = useState([]);
    let url = `https://jsonplaceholder.typicode.com/posts`;

    const getdata = async () => {
        await axios.get(url).then((res) => {
            console.log(res.data);
            setdata(res.data);
        })
    }

    useEffect(() => {
        getdata();
    } , []);
 
  return (
    <>
        <div style={{"display": "flex" , "justifyContent" : "center" , "alignItems" : "center" , "padding" : "40px"}}>
            <table>
                <thead>
                    <tr>
                        <th style={{"width" : "100px" , "padding": "10px 5px" }}>user Id</th>
                        <th style={{"width" : "50px"}}>Id</th>
                        <th style={{"padding": "10px 5px"}}>Title</th>
                        <th style={{"padding": "10px 5px"}}>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((ele) => {
                            return (<>
                                <tr key={(ele.id)}>
                                    <th>{ele.userId}</th>
                                    <th>{ele.id}</th>
                                    <th>{ele.title}</th>
                                    <th>{ele.body}</th>
                                </tr>
                            </>)
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Apicall