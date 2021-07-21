import { useState } from 'react'
import { login } from '../../services/users'
import { useHistory  } from 'react-router-dom'
import './Login.css'

const Login = (props) =>{
  const hitory = useHistory()

  const [form, setForm] = useState({
    email:'',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      [event.target.name]: event.target.value,
    })
  }

  const onLogin = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await login(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Login</button>
    }
  }

  const { email, password } = form
return(
  <div className='login-container'>
    <h2>Login</h2>
    <form onSubmit={onLogin}>
    <label>Email</label>  
    <input required
    type='text'
    name='emal'
    value={email}
    placeholder={handleChange}/>

    <label>Password</label>
    <input required
    type='text'
    name='password'
    value={password}
    placeholder={handleChange}/>

    {renderError()}
    </form>
  </div>
)
}

export default Login