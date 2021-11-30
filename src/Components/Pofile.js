import React from "react";
import { Redirect } from "react-router-dom";

function Profile({ authorized }) {
  if (!authorized) {
    return <Redirect to="/Login" />;
  }

  return (
    <div>
      <h1>If you are here you have my permission...</h1>
    </div>
  );
}

export default Profile;
