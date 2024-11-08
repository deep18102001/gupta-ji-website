import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Main(props) {
    let Datafilter = props.data
    console.log(Datafilter,"datafilter");
    let [record , setrecord] = useState([])
    let [store, setstore] = useState([])
    let navigate = useNavigate()


    
    function fet() {
        fetch("http://localhost:5000/Product").then((response) => {
            response.json().then((resp) => {
                setstore(resp)
                setrecord(resp)
            }).catch((error) => {

            })
        })
    }
    useEffect(() => {
        fet()
    }, [])
    function filterdata() {
        let value = Datafilter.toLowerCase()
        let filtdata = store.filter((val)=>{
            return val.price.toLowerCase().includes(value) || val.category.toLowerCase().includes(value)
        })
        setrecord(filtdata)
    }
    useEffect(()=>{
        filterdata()
    },[Datafilter])

    function sendData(value){
        navigate('/Description',{state:value})
      }

    return (
        <div  className='Maincss'>
            {
                record.map((value) => {
                    return (
                            <div className='Maincssdiv' onClick={()=>{sendData(value)}} >
                                <img src={value.image} />
                                <p>{value.type}</p>
                                <p>{value.category}</p>
                                <p> {value.description}</p>
                                <p>{value.price}</p>
                            </div>
                    )
                })
            }

        </div>
    )
}

export default Main