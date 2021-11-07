import React, { useState } from "react";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";
import UncontrolledModal from "./UncontrolledModal";
import ControlledModal from "./ControlledModal";

const App = () => {
  const [shouldShowModal, setShouldModal] = useState(false);

  return (
    <>
      <fieldset>
        <legend>Form</legend>
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
      </fieldset>
      <br />
      <hr />
      <br />
      <fieldset>
        <legend>Modal</legend>
        <fieldset>
          <legend>Uncontrolled Modal</legend>
          <UncontrolledModal>
            <h1>Uncontrolled Modal</h1>
          </UncontrolledModal>
        </fieldset>
        <br />
        <hr />
        <br />
        <fieldset>
          <legend>Controlled Modal</legend>
          <button onClick={() => setShouldModal(!shouldShowModal)}>
            {shouldShowModal ? "Hide Modal" : "Show Modal"}
          </button>
          <ControlledModal
            shouldShow={shouldShowModal}
            onRequestClose={() => setShouldModal(!shouldShowModal)}
          >
            <h1>Controlled Modal</h1>
          </ControlledModal>
        </fieldset>
      </fieldset>
    </>
  );
};

export default App;
