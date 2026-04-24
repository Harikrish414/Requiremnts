import React from "react";

const LeftPanel: React.FC = () => {
  return (
    <div className="hidden md:flex md:w-5/12 lg:w-5/12 bg-primary flex-col items-center justify-center p-8 text-white">
      <div className="text-center space-y-6">
        {/* Network/Node Icon */}
        <div className="text-6xl">🌐</div>

        {/* Logo */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Discovery Platform</h1>
          <p className="text-lg opacity-90">Powered by CHANGEPOND</p>
        </div>

        {/* Optional branding text */}
        <p className="text-sm opacity-75 max-w-xs">
          Connect, discover, and collaborate with the power of AI-driven insights.
        </p>
      </div>
    </div>
  );
};

export default LeftPanel;
