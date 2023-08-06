import { Button, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setIsAuthorized } from "../../../store/slice/authorizedSlice";
import Notification from "../../../UI/Notification";
import { login } from "../utils/api/login";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isButtonDisabled = !email || !password;

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const { status, response } = login(email, password);
    if (status !== 200) {
      setError(response);
    } else {
      dispatch(setIsAuthorized());
      navigate("/articles");
    }
  };

  return (
    <>
      {error && <Notification severity="error" content={error} />}
      <form onSubmit={submitHandler} className="login-form">
        <h3>Log In</h3>
        <TextField
          id="email-input"
          size="small"
          label="Email"
          variant="outlined"
          type="email"
          onChange={handleEmailChange}
        />
        <TextField
          id="password-input"
          size="small"
          type="password"
          label="Password"
          variant="outlined"
          onChange={handlePasswordChange}
        />
        <Button disabled={isButtonDisabled} type="submit" variant="contained">
          Log in
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
