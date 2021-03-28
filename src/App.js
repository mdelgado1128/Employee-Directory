import logo from './logo.svg';
import './App.css';
import React , {useEffect, useState} from "react";


function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
const api = 'https://randomuser.me/api/?results=5'
fetch(api).then((res) => res.json()).then((data)=> {
  console.log(data);
  setEmployees(data.results)
})
  },[])
  return (
    <div className="App">
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      
     {employees.map(employee => (
      <tr>
        <tb><img src={employee.picture.medium} /></tb>
      <tb>{employee.name.first} {employee.name.last}</tb>
      <tb>{employee.dob.age}</tb>
      </tr>
     ))}
     </table>
    </div>
  );
}

export default App;
