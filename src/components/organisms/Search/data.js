const data=[]

const options = {
  method: 'GET'
};

fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies', options)
.then(response => response.json())
.then(response => {
  data.push(...response)
  // console.log(response)
})
.catch(err => console.error(err));

console.log(data)


export default data;