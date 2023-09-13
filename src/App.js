import React from 'react'
import Header from '../src/component/header.jsx'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import "./app.css"
// import Field from './component/field.jsx';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function getData() {
    setData([...data, { name, email }])
    setName("")
    setEmail("")
  }

  function removeItem(index) {
    let arr = data;
    arr.splice(index, 1)
    setData([...arr])

  }
  return (
    <div className='App'>
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={getData} variant="contained" color='success'><AddIcon /></Button>
        </Stack>
      </div>


      <div className="data">
        <div className="data-val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return <div key={index} className="data-val">

              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button onClick={() => removeItem(index)} variant="contained" color='error'><DeleteIcon /></Button>

            </div>
          })
        }
      </div>
    </div>

  )
}

export default App;
