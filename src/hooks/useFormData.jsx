import { useState, useEffect } from "react";

const useFormData = () => {
  const [currentStep, setCurrentStep] = useState(
    () => Number(localStorage.getItem("currentStep")) || 1
  );
  const [formData, setFormData] = useState({
    step1Data: { name: "", surname: "" },
    step2Data: { age: "", gender: "" },
    step3Data: { companyName: "", companyCode: "" },
  });

  useEffect(() => {
    const savedData = {
      step1Data: JSON.parse(localStorage.getItem("step1Data")) || {
        name: "",
        surname: "",
      },
      step2Data: JSON.parse(localStorage.getItem("step2Data")) || {
        age: "",
        gender: "",
      },
      step3Data: JSON.parse(localStorage.getItem("step3Data")) || {
        companyName: "",
        companyCode: "",
      },
    };
    setFormData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
    const stepDataKey = `step${currentStep}Data`;
    if (formData[stepDataKey]) {
      localStorage.setItem(stepDataKey, JSON.stringify(formData[stepDataKey]));
    }
  }, [formData, currentStep]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const stepDataKey = `step${currentStep}Data`;
    setFormData((prevData) => ({
      ...prevData,
      [stepDataKey]: { ...prevData[stepDataKey], [name]: value },
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const handleBack = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = () => {
    console.log("Final Form Data Submitted:", formData);
    setFormData({
      step1Data: { name: "", surname: "" },
      step2Data: { age: "", gender: "" },
      step3Data: { companyName: "", companyCode: "" },
    });
    localStorage.removeItem("step1Data");
    localStorage.removeItem("step2Data");
    localStorage.removeItem("step3Data");
    localStorage.removeItem("currentStep");
    setCurrentStep(1);
  };

  return {
    currentStep,
    formData,
    handleChange,
    handleNext,
    handleBack,
    handleSubmit,
  };
};

export default useFormData;
