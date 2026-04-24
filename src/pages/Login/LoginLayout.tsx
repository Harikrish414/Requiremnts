import React from "react";
import LeftPanel from "./LeftPanel.tsx";
import RightPanel from "./RightPanel.tsx";

interface LoginLayoutProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ onSubmit }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Panel - 45% on desktop */}
      <LeftPanel />

      {/* Right Panel - 55% on desktop */}
      <RightPanel onSubmit={onSubmit} />
    </div>
  );
};

export default LoginLayout;
