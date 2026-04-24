import React from "react";
import LoginForm from "../../components/LoginForm.tsx";

interface RightPanelProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ onSubmit }) => {
  return (
    <div className="w-full md:w-7/12 lg:w-7/12 bg-white flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
      <div className="w-full max-w-sm space-y-6">
        {/* Header with Logo (mobile only) */}
        <div className="md:hidden text-center space-y-2 pb-6">
          <div className="text-4xl">🌐</div>
          <h1 className="text-2xl font-bold text-gray-900">Discovery Platform</h1>
        </div>

        {/* Login Heading */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          <p className="text-gray-600">Welcome back! Please login to your account.</p>
        </div>

        {/* Login Form */}
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default RightPanel;
