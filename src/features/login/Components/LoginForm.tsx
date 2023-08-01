import React from "react";
import { Button, TextField } from "@mui/material";

const LoginForm = () => {
  return (
    <form className="login-form">
      <h3>Log In</h3>
      <TextField
        id="email-input"
        size="small"
        label="Email"
        placeholder="Email"
        variant="outlined"
      />
      <TextField
        id="password-input"
        size="small"
        label="Password"
        placeholder="Password"
        variant="outlined"
      />
      <Button variant="contained">Log in</Button>
    </form>
  );
};

export default LoginForm;
