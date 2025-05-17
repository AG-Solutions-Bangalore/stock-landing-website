import React, { useState, useEffect } from "react";
import EnquiryForm from "./ContactForm";

const PopupContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            animation: "fadeIn 0.4s ease-in-out",
            // padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "30px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh", 
              overflowY: "auto", 
              position: "relative",
              animation: "scaleIn 0.4s ease-in-out",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "0px",
                fontSize: "40px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#999",
              }}
            >
              ×
            </button>

            {/* Contact Form */}
            <EnquiryForm />
          </div>

          {/* Animation Styles */}
          <style>
            {`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `}
          </style>
        </div>
      )}
    </>
  );
};

export default PopupContactForm;
