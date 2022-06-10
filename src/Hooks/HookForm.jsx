import{useState} from 'react'


const FormHook = ( initialState = {} ) => {

    const [data, setData] = useState(initialState); 

    const reset = () => setData(initialState);

    const handleChange = ({ target }) => setData({
        ...data,
        [target.name]: target.value,
    })


  return [ data, handleChange, reset ]
}

export default FormHook;