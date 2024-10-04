import React, { useContext } from "react";
import { PreloaderContext } from "./PreloaderProvider.component";

const Preloader: React.FC = () => {
  const context = useContext(PreloaderContext);

  // Handle case where context is undefined
  if (!context) {
    throw new Error("Preloader must be used within a PreloaderProvider");
  }

  const { isLoading } = context;

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center "
      style={{ zIndex: 1050, backgroundColor: "black" }}
    >
      <div className="position-relative d-flex align-items-center justify-content-center ">
        {/* Spinner container */}
        <div
          className="spinner-border text-white"
          style={{ width: "6rem", height: "6rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;