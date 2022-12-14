import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
  import './AddStudent.css';
 
 

function AddStudent(props){
 // id, firstName, lastName, photo
 const[firstName,setFirstName] = useState("");
 const[lastName,setLastName] = useState("");
 const[email, setEmail] = useState("");
const[selectedFile, setSelectedFile] = useState(null);
const[gradYear, setGradYear] = useState("");

const doWork = () => { 
  const newStudent = {"id":nanoid(), "firstName":firstName, "lastName":lastName, "email":email, "image":URL.createObjectURL(selectedFile),"gradYear":parseInt(gradYear)};
  props.addStudent(newStudent);
}
const imageUpdate = (event) => {
setSelectedFile(event.target.files[0])
}
  return(
    <div className='row mt-5' id="addStudent">
      <h3>Add Computer</h3>
<div className='col-md-2'>
<label htmlFor='txtFirstName' className='form-label'>Computer Name</label>
<input type="text" id="txtFirstName" placeholder='Computer Name' className='form-control' onChange={(evt) => setFirstName(evt.currentTarget.value)} value={firstName}/>
  </div>
<div className='col-md-2'>
<label htmlFor='txtLastName' className='form-label'>Company name</label>
<input type="text" id="txtLastName" placeholder='Company' className='form-control' onChange={(evt) => setLastName(evt.currentTarget.value)} value={lastName}/>
  </div>
<div className='col-md-2'>
<label htmlFor='txtEmail' className='form-label'>Price</label>
<input type="email" id="txtEmail" placeholder='Price' className='form-control' onChange={(evt) => setEmail(evt.currentTarget.value)} value={email}/>
  </div>
<div className='col-md-2'>
<label htmlFor='fileUpload' className='form-label'>Computer Image Optional</label>
<input type="file" name="file" id="fileUpload" onChange={imageUpdate}/>
  </div>
  <div className='col-md-2'>
  <label htmlFor='txtGradYear' className='form-label'>Release Year</label>
<input type="text" id="txtGradYear" placeholder='2000' className='form-control' onChange={(evt) => setGradYear(evt.currentTarget.value)} value={gradYear}/>
  </div>
  <div className='col-md-2'>
    <button type='button' id='btnAdd' className='btn btn-success btn-lg' onClick={doWork}>Add Computer <FontAwesomeIcon icon={faPlusCircle}/></button>
  </div>
</div>
  );
}

export default AddStudent;