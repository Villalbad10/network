import axios from "axios"

const postData = (objeto) => {
   axios.post(`https://api.npoint.io/5cd6a6f4d161f28291f0/users`, objeto)
   return
}

export default postData