import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
 const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, contactno } = existingUser[0];
  const [values, setValues] = useState({
    name,
   contactno
  });

  const handleEditUser = () => {
    setValues({ name: '', contactno: '' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      contactno: values.contactno
    }));
    navigate('/');
   }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
      <TextField
        label="Contact Number"
        value={values.contactno}
        onChange={(e) => setValues({ ...values, contactno: e.target.value })}
        inputProps={{ type: 'number', placeholder: '12345567' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser