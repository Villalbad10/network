
const getData = async () => {
   const res = await (await fetch(`https://workshop2network.herokuapp.com/users`)).json();
   return res;

}

export default getData