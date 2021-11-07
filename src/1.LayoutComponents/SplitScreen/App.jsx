import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "red" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: "green" }}>{message}</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name={"Ahmad Shobirin"} />
      <RightHandComponent message={"Wellcome to the club!!"} />
    </SplitScreen>
  );
}

export default App;
