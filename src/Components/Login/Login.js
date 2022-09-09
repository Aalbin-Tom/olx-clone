import React, { useState,useContext, useEffect } from 'react';
// import { BrowserRouter as  Link  } from 'react-router-dom'
import { FirebaseContext } from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory ,Link} from 'react-router-dom';

function Login() {

  const initialValue = { email: "", password: "" }
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  const handleChange =(e)=>{
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
    // console.log(formValues)
  } 

useEffect(()=>{
  console.log(formErrors);
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
  }
},[formErrors])
const validate=(values)=>{
const errors={}
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
if(!values.email){
  errors.email = "email is required"
}
if(!values.password){
  errors.password = "password is required"
}
return errors;

}
const handleSubmit= (e)=>{
  e.preventDefault()
  setFormErrors(validate(formValues))
  setIsSubmit(true)
  if(isSubmit){
    firebase.auth().signInWithEmailAndPassword(formValues.email, formValues.password).then((response) => {
          history.push('/')
          console.log(response);
    
        }).catch((error) => {
          alert(error.message)
        })
  }
  
}

  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
  //     history.push('/')
  //     console.log(response);

  //   }).catch((error) => {
  //     alert(error.message)
  //   })

  // }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          {/* onSubmit={handleLogin} */}
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={formValues.email}
            id="fname"
            onChange={handleChange}
            // onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <p className='error'>{formErrors.email}</p>
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={formValues.password}
            id="lname"
            onChange={handleChange}
            // onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue=""
          />
          <br />
          <p className='error' >{formErrors.password}</p>

          <br />
          <button>Login</button>
        </form>
        {/* <link To={'/signup'}>Signup</link> */}
        <Link to={'/signup'}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
