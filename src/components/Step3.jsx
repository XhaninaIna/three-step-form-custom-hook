import React from "react";
const Step3 = ({ formData, onChange, currentStep }) => {
  return (
    <div>
      <h2>Step {currentStep}: Company Information</h2>
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.step3Data.companyName}
        onChange={onChange}
      />
      <input
        type="text"
        name="companyCode"
        placeholder="Company Code"
        value={formData.step3Data.companyCode}
        onChange={onChange}
      />
    </div>
  );
};
export default Step3;
