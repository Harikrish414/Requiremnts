import React from "react";
import { Link } from "react-router-dom";

interface FormActionsProps {
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

const FormActions: React.FC<FormActionsProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  return (
    <div className="space-y-4">
      <button
        type="submit"
        onClick={onSubmit}
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>

      <div className="flex items-center justify-between text-sm">
        <Link
          to="/forgot-password"
          className="text-primary hover:text-primary-hover transition"
        >
          Forgot Password?
        </Link>
        <Link
          to="/signup"
          className="text-primary hover:text-primary-hover transition"
        >
          Sign Up
        </Link>
      </div>

      <div className="border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
        <p>&copy; 2024 Discovery Platform. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FormActions;
