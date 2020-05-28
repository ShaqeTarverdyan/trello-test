import React, { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Page = () => {
  const [activeTab, setActiveTab] = useState("");
  const toggle = (value) => {
    setActiveTab(value);
  };
  return (
    <div>
      <h3>Authentication component</h3>
      <div>
        <button onClick={() => toggle("login")}>Log in</button>
        <button onClick={() => toggle("register")}>Register</button>
      </div>
      <div>
        {activeTab === "login" && <SignIn />}
        {activeTab === "register" && <SignUp />}
        {activeTab === "" && <div>Hello </div>}
      </div>
    </div>
  );
};

export default Page;
