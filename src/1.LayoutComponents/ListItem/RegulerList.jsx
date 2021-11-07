const RegulerList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  console.log("render woi");
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i.toString()} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegulerList;
