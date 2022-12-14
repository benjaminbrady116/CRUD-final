import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import React, {useState, useEffect} from 'react';
import AddStudent from '../src/AddStudent';
import _ from 'lodash';
import Student from '../src/student';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState("");
  const [gradYear, setGradYear] = useState("");


useEffect(() => {
if(localStorage){
  const studentsLocalStorage = JSON.parse(localStorage.getItem('students'));

  if(studentsLocalStorage){
    saveStudents(studentsLocalStorage);
  }
  else{
    saveStudents(students);
  }
  
}
},[]);



const saveStudents = (students) => {
  setAllStudents(students);
  setSearchResults(students);
  if(localStorage) {
    localStorage.setItem('students', JSON.stringify(students));
  
  }
}

const addStudent = (newStudent) => {
  const updatedStudents = [...allStudents, newStudent];
  saveStudents(updatedStudents);

}

const searchStudents =() => {
 let keywordsArray = [];

 if(keywords) {
  keywordsArray = keywords.toLowerCase().split(' ');
 }

 if(gradYear){
  keywordsArray.push(gradYear.toString());
 }

 if(keywordsArray.length > 0) {
  const searchResults = allStudents.filter(student => {
    for(const word of keywordsArray){
      if(student.firstName.toLowerCase().includes(word) ||
      student.lastName.toLowerCase().includes(word)|| 
      student.gradYear === parseInt (word)){
        return true; 
      }
    }
    return false;
  });
  setSearchResults(searchResults);
}else {
  setSearchResults(allStudents);
}



}

const removeStudent = (studentToDelete) => {
console.table(studentToDelete);
const updatedStudentsArray = allStudents.filter(student => student.id !== studentToDelete.id );
saveStudents(updatedStudentsArray);

}
const updateStudent = (updatedStudent) => {
//console.table(updatedStudent);
const updatedStudentsArray = allStudents.map(student => student.id === updatedStudent.id  ? {...student,...updatedStudent } : student);
saveStudents(updatedStudentsArray);
}


  const students = [{
      id:nanoid(),
      firstName: "Alienware Aurora R13",
      lastName: "Alienware",
      email: "2500$",
      gender: "Male",
      Image: 'images/student1.jpg',
      gradYear: 2021
    }, {
      id:nanoid(),
      firstName: "Dell XPS 8950",
      lastName: "Dell",
      email: "2000$",
      gender: "Male",
      Image: 'images/student2.jpg',
      gradYear: 2021
    }, {
      id:nanoid(),
      firstName:"Corsair Vengeance i7200",
      lastName: "Corsair",
      email: "2500$",
      gender: "Male",
      Image: 'images/student3.jpg',
      gradYear: 2022
    }, {
      id:nanoid(),
      firstName: "Acer Predator Orion 3000.",
      lastName: "Acer",
      email: "3000$",
      gender: "Male",
      Image: 'images/student4.jpg',
      gradYear: 2021
    }, {
      id:nanoid(),
      firstName: "Acer Predator Orion 3000.",
      lastName: "Acer",
      email: "3000$",
      gender: "Male",
      Image: 'images/student4.jpg',
      gradYear: 2021
    }, {
      id:nanoid(),
      firstName: "Acer Predator Orion 3000.",
      lastName: "Acer",
      email: "3000$",
      gender: "Male",
      Image: 'images/student4.jpg',
      gradYear: 2021
    }, {
      id:nanoid(),
      firstName: "Acer Predator Orion 3000.",
      lastName: "Acer",
      email: "3000$",
      gender: "Male",
      Image: 'images/student4.jpg',
      gradYear: 2021
    }, {
      id:nanoid(),
      firstName: "Acer Predator Orion 3000.",
      lastName: "Acer",
      email: "3000$",
      gender: "Male",
      Image: 'images/student4.jpg',
      gradYear: 2021
    }, {
      id:nanoid(),
      firstName: "Acer Predator Orion 3000.",
      lastName: "Acer",
      email: "3000$",
      gender: "Male",
      Image: 'images/student4.jpg',
      gradYear: 2021
    }, {
      id:nanoid(),
      firstName: "Acer Predator Orion 3000.",
      lastName: "Acer",
      email: "3000$",
      gender: "Male",
      Image: 'images/student4.jpg',
      gradYear: 2021
}];

  return (
    <div className='container'>
      
      <div className="row" id='allStudents'>
        <h3>Current Top 10 Computers</h3>
    {searchResults && searchResults.map((student) =>
    (       
       <div className="col-md-2" key={student.id}>
        <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent}/> 
    </div>)
    )}

      
        </div>
 {!allStudents && <button type="button" className='btn btn-lg btn-success' onClick={() => saveStudents(students) }>Save Students</button>}
  <AddStudent addStudent={addStudent} />
  <div className='row mt-4' id="searchStudents">
    <h3>Computer Search</h3>
    <div className='col-md-4'>
      <label htmlFor='txtKeywords'>Computer Search</label>
      <input type="text" className='form-control' placeholder='Name of PC goes here' onChange={evt => setKeywords(evt.currentTarget.value)} value={keywords} />

    </div>
    <div className='col-md-4'>
      <select value={gradYear} onChange={evt => setGradYear(evt.currentTarget.value)} className='form-select' >
    <option value="">Select Year</option>
    {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
      </select>
    </div>
    <div className='col-md-4'>
      <button type='button' className='btn btn-primary' onClick={searchStudents}>Search Computers <FontAwesomeIcon icon={faSearch}/></button>
      
    </div>
  </div>
  </div>
  );
}

export default App;
