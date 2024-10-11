import React, { useEffect, useState } from "react";

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("token"));
  });
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.assign("/login");
    }, 1000);
  }
  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
