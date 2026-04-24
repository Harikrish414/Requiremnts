import React, { useState } from "react";
import FormInput from "./FormInput.tsx";
import FormActions from "./FormActions.tsx";
import { getEmailError, getPasswordError } from "../utils/validation.ts";

interface LoginFormProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const emailErr = getEmailError(email);
    const passwordErr = getPasswordError(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      return;
    }

    setIsLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(email, password, rememberMe);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={setEmail}
        error={emailError}
        id="email"
        required
      />

      <FormInput
        label="Password"
        type={passwordVisible ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={setPassword}
        error={passwordError}
        id="password"
        required
        toggleVisibility={true}
        onToggleVisibility={() => setPasswordVisible(!passwordVisible)}
      />

      <div className="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
        />
        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
          Remember me
        </label>
      </div>

      <FormActions onSubmit={handleSubmit} isLoading={isLoading} />
    </form>
  );
};

export default LoginForm;
