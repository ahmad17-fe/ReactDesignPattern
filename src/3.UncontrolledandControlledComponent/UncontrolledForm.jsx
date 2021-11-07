import React, { createRef } from "react";

const UncontrolledForm = () => {
  const nameInput = createRef();
  const ageInput = createRef();
  const hairColorInput = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      nameInput.current.value,
      ageInput.current.value,
      hairColorInput.current.value
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name...." ref={nameInput} />
      <input type="number" name="age" placeholder="age...." ref={ageInput} />
      <input
        type="text"
        name="hairColor"
        placeholder="hair color...."
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
