
import React , {useEffect, useState} from "react";


function App() {
  const [employees, setEmployees] = useState([]);
  const [myfilter, setMyFilter] = useState("");
  useEffect(() => {
const api = 'https://randomuser.me/api/?results=5'
fetch(api).then((res) => res.json()).then((data)=> {
  console.log(data);
  setEmployees(data.results)
})
  },[])
  function changeFilter (event) {
    setMyFilter(event.target.value)
  }
  return (
    <div className="App">
       <h1 className="jumbotron">Employee Directory</h1>
     <div className="container heading row col jumbotron">
       <p>Search by a employees name: </p>
       <input value={myfilter} onChange={changeFilter}/>
     </div>
      <div className="table1 container">  
      <table className="table table-hover jumbotron">
        <thread>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Image</th>
        </tr>
      </thread>
      
     {employees.filter((employee)=> (employee.name.first + " " + employee.name.last).toLowerCase().includes(myfilter.toLowerCase())).map(employee => (
      <tbody> 
      <tr>
      <tb scope="row">{employee.name.first} {employee.name.last}</tb>
      <tb scope="row">{employee.dob.age}</tb>
      <tb scope="row"><img src={employee.picture.medium} alt="employee"/></tb>
      </tr>
      </tbody>

     ))}
     </table>
     </div>
    </div>
  );
}

export default App;
