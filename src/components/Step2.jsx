import React from "react";
const Step2 = ({ formData, onChange, currentStep }) => {
  return (
    <div>
      <h2>Step {currentStep}: Personal Information</h2>
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.step2Data.age}
        onChange={onChange}
      />
      <select
        name="gender"
        value={formData.step2Data.gender}
        onChange={onChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};
export default Step2;
