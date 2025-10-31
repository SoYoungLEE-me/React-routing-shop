import { React, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginUser = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container className="login-container">
      {error && (
        <Alert variant="danger" className="login-alert">
          {error}
        </Alert>
      )}
      <h2 className="login-title">LOGIN</h2>
      <Form onSubmit={loginUser} className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일을 입력하세요"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger" type="submit" className="login-btn">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
