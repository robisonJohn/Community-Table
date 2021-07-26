import { useState } from "react";
import { login } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";
import { Layout } from "../../components";
import { Form, Container, Button, Col, Row } from "react-bootstrap";

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
        <Button type="submit" className="form-element" id="error-button">
          {form.errorMsg}
        </Button>
      );
    } else {
      return (
        <Button type="submit" className="form-element" id="login-button">
          Login
        </Button>
      );
    }
  };

  const { email, password } = form;
  return (
    <Layout>
      <body>
        <Container className="login-container">
          <Col className="login-body">
            <Row className="login-row">
              <div>
                <h2 id="login-header">TAKE A SEAT</h2>
              </div>
            </Row>
            <Row className="login-row">
              <Form id="login-form" onSubmit={onLogin}>
                <Link to={`/sign-up`}>
                  <p id="login-signup">Don't have an account? Sign up here!</p>
                </Link>
                <Form.Group className="form-element">
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    className="form-input"
                    id="email-input"
                  />
                </Form.Group>

                <Form.Group className="form-element">
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    className="form-input"
                    id="password-input"
                  />
                </Form.Group>
                {renderError()}
              </Form>
            </Row>
          </Col>
        </Container>
      </body>
    </Layout>
  );
};

export default Login;
