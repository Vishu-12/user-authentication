import React, { useState } from "react";
import { apiEndPoint, baseurl } from "../constants";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleOnChange(e) {
    if (e.target.name === "email") {
      setForm({ ...form, email: e.target.value });
    } else if (e.target.name === "password") {
      setForm({ ...form, password: e.target.value });
    }
  }
  async function handleSubmit() {
    let response = await fetch(`${baseurl}${apiEndPoint.login}`, {
      method: "POST",
      credentials: "include",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form?.email,
        password: form?.password,
      }),
    });
    if (response.status === 201) {
      response = await response.json();
      localStorage.setItem("token", response.data.token);
      console.log("register");
    } else {
      alert("Username or password wrong");
    }
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <form
        action=""
        style={{ border: "1px solid black", padding: "2rem", width: "15%" }}
      >
        <h2>Login</h2>
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleOnChange}
            value={form?.email}
          />
        </div>
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleOnChange}
            value={form?.password}
          />
        </div>
        <button style={{ padding: ".4rem 2rem" }} onClick={handleSubmit}>
          Login
        </button>
        <p>Don't have an account ? SignUp</p>
      </form>
    </div>
  );
}
