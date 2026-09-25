"use client";
import React, {useEffect} from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

function Provider({ children }) {
  const { isLoaded, user } = useUser();

  useEffect(()=>{
    if (isLoaded && user) {
      CreateNewUser();
    }
  },[isLoaded, user]);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
      });
      console.log("User synchronized:", result.data);
    } catch (error) {
      console.error("Failed to synchronize user:", error);
    }
  }
  return <div>{children}</div>;
}

export default Provider;
