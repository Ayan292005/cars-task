import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"

function Cars() {
  let DBurl="http://localhost:4000/cars"
  let [data, setData] = useState([])

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  function deleteData(id) {
    let dataId = data.filter(el => el._id !== id)
    setData(dataId)

    axios.delete(`${DBurl}/${id}`)
      .then(() => {
        getData()
      })
  }


  return (
    <>
      <table style={{ width: "90%", margin: "0 auto" }}>
        <thead>
          <tr style={{textAlign:"left"}} >
            <th>Brand Name</th>
            <th>Model Name</th>
            <th>year</th>
            <th>color</th>
            <th>details</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map(car => (
              <tr key={car._id} style={{backgroundColor:car.CarisNew ? "green" : "red"}} >
                <td>{car.brandName}</td>
                <td>{car.modelName}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td><button ><NavLink to={`/cars/${car._id}`} style={{textDecoration:"none",color:"black"}}>Details</NavLink></button></td>
                <td><button  onClick={() => deleteData(car._id)}>Delete</button> </td>
              </tr>
            ))
          }
        </tbody>
      </table> 

    </>
  )
}

export default Cars