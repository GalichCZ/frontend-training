import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { Button, TextField } from "@mui/material";
import { tenantLogin } from "../utils/api/tenantLogin";
import { tenantRegistration } from "../utils/api/tenantRegister";

//this page is only for tenants api handle, to recieve api key and make login into server system

const Admin = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const isButtonDisabled = !nickname || !password;

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const response = await tenantLogin(nickname, password);
      localStorage.setItem("access_token", response.access_token);
    } else {
      const response = await tenantRegistration(nickname, password);
      localStorage.setItem("apiKey", response.apiKey);
    }
  };

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <section className="login-section">
      <form onSubmit={submitHandler} className="login-form">
        <h3>{isLogin ? "Login" : "Registration"}</h3>
        <TextField
          id="nickname-input"
          size="small"
          label="Nickname"
          variant="outlined"
          type="text"
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
          {isLogin ? "Log in" : "register"}
        </Button>
      </form>
      <Button
        className="switch"
        variant="contained"
        onClick={() => {
          setIsLogin((prev) => !prev);
        }}
      >
        {isLogin ? "Registration" : "Login"}
      </Button>
    </section>
  );
};

export default Admin;
