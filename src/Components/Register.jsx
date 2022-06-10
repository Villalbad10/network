import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import getData from '../helpers/getData';

const Register = () => {
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
      <>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control name="email" onChange={handleValue} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control name="pass" onChange={handleValue} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
               Submit
            </Button>
         </Form>
      </>
   )
}

export default Register