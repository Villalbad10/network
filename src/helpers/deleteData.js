import axios from "axios"

const deleteData = (id) => {
   axios.delete(`https://api.npoint.io/5cd6a6f4d161f28291f0/users/${id}`)
}

export default deleteData