import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import getData from '../helpers/getData';
<<<<<<< HEAD
import FormHook from '../Hooks/HookForm';
=======
import { Btn, FormDiv, FormInput, LoginDiv } from '../styles/styles';
>>>>>>> 7fce9e1d0f0a1a5a6cb666232cb367b7741f23f0

const LoginComp = () => {
   const [data, handleChange, reset] = FormHook({
      email:"",
      pass:""
   })

   useEffect(() => {
      getData()
         .then(res => console.log(res))
   }, [])

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    const usedata = data.find((user) => user.email === inputs.email)
   //    console.log(usedata);
   // }


   return (
<<<<<<< HEAD
      <>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control name="pass" onChange={handleChange} type="password" placeholder="Password" />
=======
   <LoginDiv>
          <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1654821647/FindyApp/LOGOLOGO-2_niodaj.png' alt='logoFrom'/>
           <FormDiv onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{'display':'flex', 'flexDirection':'column', 'width':'80%','margin':'0 auto', 'gap':'5px', 'marginTop':'20px'}}>
               <Form.Label>E m a i l  A d d r e s s</Form.Label>
               <FormInput name="email" onChange={handleValue} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={{'display':'flex', 'flexDirection':'column', 'width':'80%','margin':'0 auto', 'gap':'5px', 'marginTop':'20px'}}>
               <Form.Label>P a s s w o r d</Form.Label>
               <FormInput name="pass" onChange={handleValue} type="password" placeholder="Password" />
>>>>>>> 7fce9e1d0f0a1a5a6cb666232cb367b7741f23f0
            </Form.Group>
            <Btn variant="outline-primary" type="submit">
               Submit
            </Btn>
         </FormDiv>
      </LoginDiv>
   )
}

export default LoginComp