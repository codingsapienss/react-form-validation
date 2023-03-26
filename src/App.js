import FormInput from './Components/FormInput.js'
import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  })

  const input = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'User-name',
      label: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character !!",
      pattern: `^[a-zA-Z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: "Email",
      errorMessage: "It should be a valid email !!",
      required: true
    }, {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: "Birthday"
    }, {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: "Password",
      errorMessage: "Password should be 8-20 character and must include at least 1 letter, 1 number and 1 special character.!!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }, {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: "Confirm Password",
      errorMessage: "Password doesn't match",
      pattern: values.password,
      required: true
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {input.map((item) => {
          return <FormInput key={item.id} {...item} value={values[input.name]} onChange={onChange} />
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
