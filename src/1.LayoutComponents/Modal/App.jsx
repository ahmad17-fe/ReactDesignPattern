import LargeProductListItem from "../ListItem/products/LargeProductListItem";
import Modal from "./Modal";
import { people, products } from "../Data";

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
