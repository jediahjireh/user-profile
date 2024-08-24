// import react library
import React from "react";
// import react-dom library
import ReactDOM from "react-dom/client";

// import Bootstrap's ready-to-use CSS
import "bootstrap/dist/css/bootstrap.min.css";

// import custom stylesheet file
import "./custom.css";

// import user component
import UserProfile from "./components/UserProfile.jsx";
// import user data to pass as a prop
import user from "./components/UserData.jsx";

// create main element with user profile component
const element = (
  <div className="user-profile">
    <UserProfile user={user} />
  </div>
);

// obtain root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// render main element
root.render(<React.StrictMode>{element}</React.StrictMode>);
