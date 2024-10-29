import React from "react";
const Step1 = ({ formData, onChange, currentStep }) => {
  return (
    <div>
      <h2>Step {currentStep}: Basic Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.step1Data.name}
        onChange={onChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        value={formData.step1Data.surname}
        onChange={onChange}
      />
    </div>
  );
};

export default Step1;
