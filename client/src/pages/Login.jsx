import React from "react";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="passowrd" />
      </form>
    </div>
  );
};

export default Login;
