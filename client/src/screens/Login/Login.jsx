import { useState } from "react";
import { login } from "../../services/users";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { Layout } from "../../components";
import { Form, Container, Button } from 'react-bootstrap';

const Login = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await login(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <Button type="submit" className="form-element">
          {form.errorMsg}
        </Button>
      );
    } else {
      return <Button type="submit" className="form-element">Login</Button>;
    }
  };

  const { email, password } = form;
  return (
    <Layout>
      <Container className="login-container">
        <div id="login-header"><h1>TAKE A SEAT</h1></div>
        
        <Form id="login-form">
          <Form.Label>Login</Form.Label>
          <Form.Group className="form-element">
            <Form.Control 
            required
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleChange}/>
          </Form.Group>   

          <Form.Group className="form-element">
            <Form.Control 
            required
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={handleChange}/>
            {renderError()}
          </Form.Group>
        </Form>
      </Container>
    </Layout>
  );
};

export default Login;
