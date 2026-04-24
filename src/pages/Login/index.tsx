import React from "react";
import LoginLayout from "./LoginLayout.tsx";

const LoginPage: React.FC = () => {
  const handleLoginSubmit = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    try {
      // TODO: Integrate with backend API
      console.log("Login attempt:", { email, password, rememberMe });
      
      // Placeholder: Mock login response
      const response = {
        token: "mock-jwt-token",
        user: {
          id: "1",
          email: email,
          name: "User",
        },
      };

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }
      
      console.log("Login successful:", response);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return <LoginLayout onSubmit={handleLoginSubmit} />;
};

export default LoginPage;
