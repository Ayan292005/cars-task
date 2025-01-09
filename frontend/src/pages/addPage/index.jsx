import React from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom';

function Add() {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      brandName: '',
      modelName:'',
      year:'',
      CarisNew:'',
      color:''

    },
    onSubmit: values => {
     axios.post("http://localhost:4000/cars",values)
    },
  })


  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <label htmlFor="brandName">brandName</label>
        <input
          id="brandName"
          name="brandName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.brandName}
        />
        <label htmlFor="modelName">modelName</label>
        <input
          id="modelName"
          name="modelName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.modelName}
        />
        <label htmlFor="year">year</label>
        <input
          id="year"
          name="year"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.year}
        />
        <label htmlFor="CarisNew">CarisNew</label>
        <input
          id="CarisNew"
          name="CarisNew"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.CarisNew}
        />
        <label htmlFor="color">color</label>
        <input
          id="color"
          name="color"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.color}
        />

        <button type="submit" onClick={() => navigate("/cars")}>Submit</button>
      </form>
    </>
  )
}

export default Add