import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">

        <div className="loading-logo">
          TECHNOVA
        </div>

        <div className="loading-line">
          <div className="loading-progress"></div>
        </div>

        <p>INITIALIZING INNOVATION...</p>

      </div>
    </div>
  );
}