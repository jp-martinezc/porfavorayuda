import { useState } from "react";

const useJobRegistry = (schema) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "offers"
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputs.name,
        company: inputs.company,
        salary: inputs.salary,
        city: inputs.city
      })
    })
    .then(()=>
    {
      alert("Job has been registered");
    })
    console.log("Form submitted");
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return { handleSubmit, handleInputChange };
};

export default useJobRegistry;