import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();  

    const data = {
      lname: name,
      lname2: lname,
      lage: age,
      lmail: email,
      lFname: fname,
      lMname: mname,
    };

    const url = "http://localhost:5001/saveData";
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json()) 
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    console.table(data);
    console.log(data);
  };

  return (
    <div className="form">
      <div className="form-Details">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Full Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="inp"
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            id="Lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
            className="inp"
          />
          <br/>
          <div className='Myinp'>
          <label htmlFor="">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
             type='text'
             id='email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder='Email'
             className='inp'
             />
          </div>
          <br />
          <div className='Myinp'>
          <label htmlFor="">Your Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="inp"
          />
          </div>
          <br />
          <div className='Myinp'>
          <label htmlFor="">Father Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
          <input
            type="text"
            id="Fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Father's name"
            className="inp"
          />
          </div>
          <br />
          <div className='Myinp'>
          <label htmlFor="">Mother Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            id="Mname"
            value={mname}
            onChange={(e) => setMname(e.target.value)}
            placeholder="Mother's name"
            className="inp"
          />
          </div>
          <br />

          <button type="submit" id='btn'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
