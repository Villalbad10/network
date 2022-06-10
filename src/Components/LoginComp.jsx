import React, { useEffect, useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import getData from '../helpers/getData';
import FormHook from '../Hooks/HookForm';
import { Btn, FormDiv, FormInput, LoginDiv } from '../styles/styles';

const LoginComp = () => {
   const navigate = useNavigate()
   const [data, handleChange, reset] = FormHook({
      email: "",
      pass: ""
   })

   useEffect(() => {
      console.log(data)
   }, [data])

   const handleSubmit = async (e) => {
      e.preventDefault();
      const datos = await getData()
      const email = data.email;
      const password = data.pass;
      datos.forEach(element => {
         const { email: emailUsuario, pass: contraseña } = element;
         if (emailUsuario == email) {
            if (contraseña == password) {
               reset()
               navigate('/home')
            }
            else { alert('Contraseña incorrecta') }
         }
      })
   }



   return (
      <LoginDiv>
         <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1654821647/FindyApp/LOGOLOGO-2_niodaj.png' alt='logoFrom' />
         <FormDiv onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ 'display': 'flex', 'flexDirection': 'column', 'width': '80%', 'margin': '0 auto', 'gap': '5px', 'marginTop': '20px' }}>
               <Form.Label>E m a i l  A d d r e s s</Form.Label>
               <FormInput name="email" onChange={handleChange} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={{ 'display': 'flex', 'flexDirection': 'column', 'width': '80%', 'margin': '0 auto', 'gap': '5px', 'marginTop': '20px' }}>
               <Form.Label>P a s s w o r d</Form.Label>
               <FormInput name="pass" onChange={handleChange} type="password" placeholder="Password" />
            </Form.Group>
            <Btn variant="outline-primary" type="submit">
               Submit
            </Btn>
            <Link to="/register"><Btn variant="outline-primary">
               Register
            </Btn>
            </Link>
         </FormDiv>
      </LoginDiv>
   )
}
export default LoginComp