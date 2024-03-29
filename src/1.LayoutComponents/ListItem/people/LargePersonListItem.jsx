const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair color: {hairColor}</p>
      <h3>Hobbies: </h3>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i.toString()}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePersonListItem;
