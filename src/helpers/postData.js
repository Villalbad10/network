import axios from "axios"

const postData = (objeto) => {
   axios.post(`https://workshop2network.herokuapp.com/users`, objeto)
}

export default postData