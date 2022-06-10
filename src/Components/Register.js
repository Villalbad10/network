import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import getData from '../helpers/getData';
import { Btn, FormDiv, FormInput, LoginDiv } from '../styles/styles';

const RegisterComp = () => {
   const [data, setData] = useState([]);
   const [inputs, setInputs] = useState({
      "email": "",
      "pass": ""

   });

   useEffect(() => {
      getData()
         .then(res => console.log(res))
   }, [])

   const handleSubmit = (e) => {
      e.preventDefault();
      const usedata = data.find((user) => user.email === inputs.email)
      console.log(usedata);
   }

   const handleValue = ({ target }) => {
      setInputs({
         ...inputs,
         [target.name]: target.value
      })
   }

   return (
   <LoginDiv>
         <FormDiv onSubmit={handleSubmit}>
         <img style={{'width':'40%', 'display':'flex', 'margin':'0 auto'}} src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1654821647/FindyApp/LOGOLOGO-2_niodaj.png' alt='logoFrom'/>
           <Form.Group className="mb-3" controlId="formBasicEmail" style={{'display':'flex', 'flexDirection':'column', 'width':'80%','margin':'0 auto', 'gap':'5px', 'marginTop':'20px'}}>
               <Form.Label>U s e r N a m e</Form.Label>
               <FormInput name="email" onChange={handleValue} type="text" placeholder="Enter User Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" style={{'display':'flex', 'flexDirection':'column', 'width':'80%','margin':'0 auto', 'gap':'5px', 'marginTop':'20px'}}>
               <Form.Label>E m a i l  A d d r e s s</Form.Label>
               <FormInput name="email" onChange={handleValue} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={{'display':'flex', 'flexDirection':'column', 'width':'80%','margin':'0 auto', 'gap':'5px', 'marginTop':'20px'}}>
               <Form.Label>P a s s w o r d</Form.Label>
               <FormInput name="pass" onChange={handleValue} type="password" placeholder="Password" />
            </Form.Group>
            <Btn variant="outline-primary" type="submit">
               Sign up
            </Btn>
         </FormDiv>
      </LoginDiv>
   )
}

export default RegisterComp