
const getData = async () => {
   const res = await (await fetch(`https://api.npoint.io/5cd6a6f4d161f28291f0`)).json();
   return res;

}

export default getData