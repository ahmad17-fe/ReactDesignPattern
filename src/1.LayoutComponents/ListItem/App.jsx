import NumberedList from "./NumberedList";
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonListItem from "./people/SmallPersonListItem";
import LargeProductListItem from "./products/LargeProductListItem";
import SmallProductListItem from "./products/SmallProductListItem";
import RegulerList from "./RegulerList";
import { people, products } from "../Data";

function App() {
  return (
    <>
      <RegulerList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <span>------------------------------------</span>
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <span>------------------------------------</span>
      <RegulerList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <span>------------------------------------</span>
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
