import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import getData from '../helpers/getData';
import postData from '../helpers/postData';
import FormHook from '../Hooks/HookForm';
import {useNavigate} from 'react-router-dom'
import { Btn, FormDiv, FormInput, LoginDiv } from '../styles/styles';
import axios from "axios"
const RegisterComp = () => {
   const navigate = useNavigate()
   const [data, handleChange, reset]= FormHook({
      name:"", 
      email:"",
      pass:"", 
      img:"https://res.cloudinary.com/dcsn54xoj/image/upload/v1654747902/FoodApp/img_568656_zd8mzf.png"
      });

   useEffect(() => {
   
   }, [])

   const handleSubmit = async (e) => {
      e.preventDefault();
      const datos= await getData()
      const email =  data.email;
      datos.forEach(element => {
        const { email: emailUsuario,} = element;
        if (emailUsuario!= email){
         axios.post('https://api.npoint.io/5cd6a6f4d161f28291f0/users',data)
        reset()
        navigate('/home')}
          else(alert('Este usuario ya existe'))
      
    })}


   return (
   <LoginDiv>
         <FormDiv onSubmit={handleSubmit}>
         <img style={{'width':'40%', 'display':'flex', 'margin':'0 auto'}} src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1654821647/FindyApp/LOGOLOGO-2_niodaj.png' alt='logoFrom'/>
           <Form.Group className="mb-3"  style={{'display':'flex', 'flexDirection':'column', 'width':'80%','margin':'0 auto', 'gap':'5px', 'marginTop':'20px'}}>
               <Form.Label>U s e r N a m e</Form.Label>
               <FormInput name="name" onChange={handleChange} type="text" placeholder="Enter User Name" />
            </Form.Group>

            <Form.Group className="mb-3"  style={{'display':'flex', 'flexDirection':'column', 'width':'80%','margin':'0 auto', 'gap':'5px', 'marginTop':'20px'}}>
               <Form.Label>E m a i l  A d d r e s s</Form.Label>
               <FormInput name="email" onChange={handleChange} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={{'display':'flex', 'flexDirection':'column', 'width':'80%','margin':'0 auto', 'gap':'5px', 'marginTop':'20px'}}>
               <Form.Label>P a s s w o r d</Form.Label>
               <FormInput name="pass" onChange={handleChange} type="password" placeholder="Password" />
            </Form.Group>
            <Btn variant="outline-primary" type="submit">
               Sign up
            </Btn>
         </FormDiv>
      </LoginDiv>
   )
}

export default RegisterComp