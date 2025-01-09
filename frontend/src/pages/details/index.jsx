import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

function Details() {
  let [product, setProduct] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()

  function getDetails() {
      axios.get(`http://localhost:4000/cars/${id}`)
          .then(res => {
              setProduct(res.data.data)
          })
  }
  useEffect(() => {
      getDetails()
  }, [id])
  return (
    <>
              <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:"10px",fontSize:"20px"}}>
                <h1>{product.brandName}</h1>
                <p>modelName:{product.modelName}</p>
                <p>year:{product.year}</p>
                <p>color:{product.color}</p>
                <button style={{border:"1px solid black",borderRadius:"10px",padding:"5px"}} onClick={() => navigate("/cars")}>Go Back</button>
            </div>
    </>
  )
}

export default Details