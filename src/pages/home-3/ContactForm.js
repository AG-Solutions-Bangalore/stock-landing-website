import React, { useState } from "react";
import contactBG from "../../assets/img/contact/bg-5.jpg";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    enquiryFullName: "",
    enquiryEmail: "",
    enquiryMobile: "",
    enquiryMessage: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const validate = () => {
    const newErrors = {};

    if (!formData.enquiryFullName.trim()) {
      newErrors.enquiryFullName = "Name is required";
    }
    if (!formData.enquiryEmail.trim()) {
      newErrors.enquiryEmail = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.enquiryEmail)) {
      newErrors.enquiryEmail = "Invalid email format";
    }
    if (!formData.enquiryMobile.trim()) {
      newErrors.enquiryMobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.enquiryMobile)) {
      newErrors.enquiryMobile = "Mobile must be exactly 10 digits";
    }
    if (!formData.enquiryMessage.trim()) {
      newErrors.enquiryMessage = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "enquiryMobile") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch(
        "https://agsdemo.in/stockapi/public/api/createEnquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setToast({
          show: true,
          type: "success",
          message: "Enquiry submitted successfully!",
        });
        setFormData({
          enquiryFullName: "",
          enquiryEmail: "",
          enquiryMobile: "",
          enquiryMessage: "",
        });
        setErrors({});
      } else {
        setToast({
          show: true,
          type: "error",
          message: result.message || "Submission failed!",
        });
      }
    } catch (error) {
      setToast({ show: true, type: "error", message: "Something went wrong!" });
    }

    setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
  };

  return (
    <div
      className="it-contact-wrap"
      style={{ backgroundImage: `url(${contactBG})` }}
    >
      <h4 className="it-contact-title pb-15">Get in Touch</h4>
      <div className="enquiry-form-container" style={{ position: "relative" }}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 mb-15">
              <div className="it-contact-input-box">
                <input
                  type="text"
                  name="enquiryFullName"
                  placeholder="Your Name"
                  value={formData.enquiryFullName}
                  onChange={handleChange}
                />
                {errors.enquiryFullName && (
                  <span style={{ color: "red", fontSize: "13px" }}>
                    {errors.enquiryFullName}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12 mb-15">
              <div className="it-contact-input-box">
                <input
                  type="email"
                  name="enquiryEmail"
                  placeholder="Your Email"
                  value={formData.enquiryEmail}
                  onChange={handleChange}
                />
                {errors.enquiryEmail && (
                  <span style={{ color: "red", fontSize: "13px" }}>
                    {errors.enquiryEmail}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12 mb-15">
              <div className="it-contact-input-box">
                <input
                  type="text"
                  name="enquiryMobile"
                  placeholder="Phone"
                  value={formData.enquiryMobile}
                  onChange={handleChange}
                />
                {errors.enquiryMobile && (
                  <span style={{ color: "red", fontSize: "13px" }}>
                    {errors.enquiryMobile}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12 mb-30">
              <div className="it-contact-textarea-box">
                <textarea
                  name="enquiryMessage"
                  placeholder="Message"
                  value={formData.enquiryMessage}
                  onChange={handleChange}
                />
                {errors.enquiryMessage && (
                  <span style={{ color: "red", fontSize: "13px" }}>
                    {errors.enquiryMessage}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="ed-btn-square">
            <span>Submit Now</span>
          </button>
        </form>
        {toast.show && (
          <div
            className="toast-notification"
            style={{
              position: "fixed",
              top: "80px",
              right: "20px",
              minWidth: "250px",
              padding: "16px 20px",
              backgroundColor: toast.type === "success" ? "#e6ffed" : "#ffe6e6",
              color: toast.type === "success" ? "#2e7d32" : "#c62828",
              border: `1px solid ${
                toast.type === "success" ? "#81c784" : "#ef5350"
              }`,
              borderLeft: `5px solid ${
                toast.type === "success" ? "#4caf50" : "#f44336"
              }`,
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              zIndex: 9999,
              animation: "slideIn 0.5s ease forwards",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ flex: 1 }}>{toast.message}</span>
            <button
              onClick={() => setToast({ show: false, type: "", message: "" })}
              style={{
                background: "transparent",
                border: "none",
                color: toast.type === "success" ? "#2e7d32" : "#c62828",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ×
            </button>

            <style>
              {`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}
            </style>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryForm;
