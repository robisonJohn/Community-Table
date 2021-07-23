import { useState } from "react";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";
import "./SignUp.css";
import { Layout } from "../../components";
import { Form, Container, Button } from "react-bootstrap";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    company_name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    address: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        company_name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        address: "",
        sError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <Button type="submit" id="signup-button">
          {form.errorMsg}
        </Button>
      );
    } else {
      return (
        <Button type="submit" id="signup-button">
          SIGN UP
        </Button>
      );
    }
  };

  const {
    username,
    company_name,
    email,
    password,
    passwordConfirmation,
    address,
  } = form;

  return (
    <Layout>
      <Container className="signup-container">
        <div id="signup-header">
          <h2>COME JOIN THE TABLE</h2>
        </div>
        <Form onSubmit={onSignUp} className="signup-form">
          <Form.Group>
            <Form.Control
              required
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleChange}
              className="sign-input"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              required
              type="text"
              name="company_name"
              value={company_name}
              placeholder="Company Name"
              onChange={handleChange}
              className="sign-input"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              required
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              className="sign-input"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="sign-input"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="sign-input"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              required
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              onChange={handleChange}
              className="sign-input"
            />
          </Form.Group>
          {renderError()}
        </Form>
      </Container>
    </Layout>
  );
};

export default SignUp;
