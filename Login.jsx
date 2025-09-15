import React from "react";

function Login() {
  return (
    <main>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required /><br /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" required /><br /><br />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
