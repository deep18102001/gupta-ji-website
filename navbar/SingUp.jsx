import React, { useEffect, useState } from 'react';

function SingUp() {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [responseMap, setResponseMap] = useState([]);
  const [log, setLog] = useState(null);

  const inputData = (e) => {
    e.preventDefault();

    if (number.length !== 10) {
      console.log("Number must be 10 digits long");
      return;
    }
    const userData = { name, emailId, password, number };
    dataFun(userData);
  };



  const dataFun = (userData) => {
    fetch("http://localhost:5000/user", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(check => {
      setResponseMap(check);
      console.log(check, 'check');
    })
    .catch(error => {
      console.log(error, "error");
    });
  };

  const cartUpdate = () => {
    fetch("http://localhost:5000/user", {
      method: "GET",
    })
    .then(response => response.json())
    .then(resp => {
      setLog(resp);
      console.log(resp, "resp");
    });
  };

  useEffect(() => {
    cartUpdate(); 
  }, []);

  return (
    <div className='sing'>
      <form className='input' onSubmit={inputData}>
        <input 
          type='text' 
          onChange={(e) => setName(e.target.value)} 
          placeholder='Please enter your name' 
        />
        <input 
          type='email' 
          onChange={(e) => setEmailId(e.target.value)} 
          placeholder='Please enter your email id' 
        />
        <input 
          type='password' 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder='Please enter your password' 
        />
        <input 
          type='number' 
          onChange={(e) => setNumber(e.target.value)} 
          placeholder='Please enter your number' 
        />
        <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default SingUp;
