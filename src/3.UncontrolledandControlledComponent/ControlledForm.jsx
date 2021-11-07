import React, { useState, useEffect, useCallback } from "react";

const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be two or more characters");
    } else {
      setNameInputError("");
    }
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, hairColor);
  };

  return (
    <form onSubmit={handleSubmit}>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        type="text"
        name="name"
        placeholder="name...."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="age...."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="hair color...."
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
