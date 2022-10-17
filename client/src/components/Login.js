import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const loginInput = {
      email,
      password,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInput),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        // alert("Login successful!");
        // history("/")
      }
    });
  };

  return (
    <div className="Loginto">
      <div></div>
      <div>
        <div className="bg-grey-lighter h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign in</h1>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-800 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Login
                </button>
              </form>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="text-grey-dark mt-6">
              Not Registered?
              <span className="no-underline border-b border-blue text-blue">
                <Link to="/register">Register</Link>
              </span>
              .
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
