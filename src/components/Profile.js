import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <div>
      Profile
      <br />
      <hr />
      <Link to="/profile/myaccount">My Account</Link>
      <br />
      <hr />
      <Link to="/profile/mysettings">My Settings</Link>
      <Outlet />
    </div>
  );
};
