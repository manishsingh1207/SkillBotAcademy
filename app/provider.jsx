"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

function Provider({ children }) {
  const { isLoaded, user } = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    if (isLoaded && user) {
      CreateNewUser();
    }
  }, [isLoaded, user]);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
      });
      console.log("User synchronized:", result.data);
      setUserDetail(result.data);
    } catch (error) {
      console.error("Failed to synchronize user:", error);
    }
  };
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
