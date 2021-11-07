import React from "react";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";

const App = () => {
  return (
    <>
      <fieldset>
        <legend>Uncontrolled Form</legend>
        <UncontrolledForm />
      </fieldset>
      <br />
      <hr />
      <br />
      <fieldset>
        <legend>Controlled Form</legend>
        <ControlledForm />
      </fieldset>
    </>
  );
};

export default App;
