import React from 'react'
import { useEffect, useState } from 'react'

function Home() {
    const [data,setData]=useState([])
    const getApiData = async()=>{
        const apiData = await fetch(' https://restcountries.com/v2/all?fields=name,region,flag');
        const dataList= await apiData.json();
        console.log( dataList)
        setData(dataList)
    }
    useEffect(() => {
        getApiData()
    }, [])
    
  return (
    <div>
        {data.map((item,index)=>{
            return(
                <div key={index}>
                    Name :{item.name}
                    <br />
                    Region:{item.region}
                    <br />
                    <img src={item.flag} alt="" style={{height:'50px'}} />
                </div>
            )
        })}
    </div>
  )
}

export default Home