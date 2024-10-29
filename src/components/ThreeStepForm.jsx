import React from "react";
import useFormData from "../hooks/useFormData";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "../styles/threestepform.css";
const ThreeStepForm = () => {
  const {
    currentStep,
    formData,
    handleChange,
    handleNext,
    handleBack,
    handleSubmit,
  } = useFormData();
  return (
    <div className="form-container">
      {currentStep === 1 && (
        <Step1
          formData={formData}
          onChange={handleChange}
          currentStep={currentStep}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          onChange={handleChange}
          currentStep={currentStep}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          onChange={handleChange}
          currentStep={currentStep}
        />
      )}
      <div className="button-container">
        {currentStep > 1 && <button onClick={handleBack}>Back</button>}
        <button onClick={currentStep < 3 ? handleNext : handleSubmit}>
          {currentStep < 3 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};
export default ThreeStepForm;
