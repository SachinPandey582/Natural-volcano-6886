import React from "react";
import CCss from "./check.module.css"
function AdminLandingPage() {
  return (
    <div className={CCss.adminlandingpage}>
      <div className="avatarsection">
        <img src="avatar.png" alt="Avatar" />
        <h2>Welcome, Admin</h2>
        <p>Here is your dashboard with all the relevant information</p>
      </div>
      <div className="detailssection">
        <h3>Details:</h3>
        <ul>
          <li>Number of Users: 100</li>
          <li>Number of Orders: 50</li>
          <li>Number of Products: 200</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminLandingPage;
