import React, { useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full min-h-screen bg-[#f3f7fa] overflow-x-hidden">
      {/* Brand Luxury Initial Loader */}
      <Loader
        isLoading={loading}
        minDuration={1800}
        onComplete={() => setLoading(false)}
      />

      {/* Main Website Application */}
      <Home />
    </div>
  );
}

export default App;