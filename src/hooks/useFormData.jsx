import { useState, useEffect } from "react";

const useFormData = () => {
  const [currentStep, setCurrentStep] = useState(1);
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

  //   useEffect(() => {
  //     console.log(
  //       "Navigated to Step",
  //       currentStep,
  //       "with Data:",
  //       formData[`step${currentStep}Data`]
  //     );
  //   }, [currentStep, formData]);

  const setStepData = (step, data) => {
    const updatedData = { ...formData, [`step${step}Data`]: data };
    localStorage.setItem(`step${step}Data`, JSON.stringify(data));
    setFormData(updatedData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const stepDataKey = `step${currentStep}Data`;
    setFormData((prevData) => {
      const updatedStepData = { ...prevData[stepDataKey], [name]: value };
      localStorage.setItem(stepDataKey, JSON.stringify(updatedStepData));
      return { ...prevData, [stepDataKey]: updatedStepData };
    });
  };

  const handleNext = () => {
    setStepData(currentStep, formData[`step${currentStep}Data`]);
    setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const handleBack = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = () => {
    setStepData(currentStep, formData[`step${currentStep}Data`]);
    console.log("Final Form Data Submitted:", formData);
    setFormData({
      step1Data: { name: "", surname: "" },
      step2Data: { age: "", gender: "" },
      step3Data: { companyName: "", companyCode: "" },
    });
    localStorage.removeItem("step1Data");
    localStorage.removeItem("step2Data");
    localStorage.removeItem("step3Data");
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
