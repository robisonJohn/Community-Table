import { useState } from "react";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";
import "./SignUp.css"
import { Layout } from "../../components";
import { Form, Container, Button } from 'react-bootstrap';

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    company: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    address: '',
    isError: false,
    errorMsg: '',
  })


const handleChange = (event) =>
setForm({
  ...form,
  [event.target.name]: event.target.value,
})

const onSignUp = async (event) => {
  event.preventDefault()
  const { setUser } = props
  try {
    const user = await signUp(form)
    setUser(user)
    history.push('/')
  } catch (error) {
    console.error(error)
    setForm({
      username: '',
      company: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      address: '',
      sError: true,
      errorMsg: 'Sign Up Details Invalid',
    })
  }
}

const renderError = () => {
  const toggleForm = form.isError ? 'danger' : ''
  if (form.isError) {
    return (
      <Button type='submit' className={toggleForm}>
        {form.errorMsg}
      </Button>
    )
  } else {
    return <Button type='submit'>Sign Up</Button>
  }
}

const { username, company, email, password, passwordConfirmation, address } = form

return (
  <Layout>
    <Container className='signup-container'>
      <h1>COME JOIN THE TABLE</h1>
        <Form onSubmit={onSignUp}>
          <Form.Label>Sign Up</Form.Label>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type='text'
              name='username'
              value={username}
              placeholder='Enter username'
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control
              required
              type='text'
              name='company'
              value={company}
              placeholder='Enter company'
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              type='password'
              placeholder='Confirm Password'
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type='text'
              name='address'
              value={address}
              placeholder='Enter address'
              onChange={handleChange}
            />
          </Form.Group>

          
          {renderError()}
        </Form>
      </Container>

  </Layout>
)
}

export default SignUp