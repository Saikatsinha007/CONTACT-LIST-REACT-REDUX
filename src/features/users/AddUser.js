import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';

function AddUser() {
     const dispatch= useDispatch();
    const navigate = useNavigate();
    const [values,setValues]= useState({
        name:'',
        contactno: ''
    })

    const handleAddUser = () => {
        setValues({ name: '',  contactno: '' });
        dispatch(addUser({
          id: uuidv4(),
          name: values.name,
          contactno: values.contactno
        }));
        navigate('/');

        console.log(values)
      }

  return (
    <div className="mt-10 max-w-xl mx-auto">
         <TextField
        label="Name"
        value={values.name}
         onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Hey Your Name Please !' }}
      />

   <br/>
<TextField
        label="Contact Number"
         value={values.contactno}
         onChange={(e) => setValues({ ...values, contactno: e.target.value })}
        inputProps={{ type: 'number', placeholder: 'Hey Your contact number Please !' }}
      />
        
<Button onClick={handleAddUser}>Submit</Button>

</div>
  )
}

export default AddUser