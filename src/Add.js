import React from "react";

const Add = ({ people, setPeople }) => {
  console.log({ people });

  const [element, setElement] = React.useState({
    id: "",
    name: "",
    age: /[0-9]/,
    image: "",
  });
  const [birthday, setBirthday] = React.useState(true);

  const Adding = (e) => {
    e.preventDefault();
    element.id = people[people.length - 1].id + 1;
    element.image =
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg";
    setPeople(people.concat(element));
    setElement("");
    setBirthday(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {birthday ? (
        <button onClick={() => setBirthday(false)}>Add a birthday</button>
      ) : (
        <form onSubmit={Adding} className="form">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={element && element.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            name="age"
            value={element && element.age}
            placeholder="Your Age"
            onChange={handleChange}
            required
          />
          <button type="submit">Add a Person</button>
        </form>
      )}
    </div>
  );
};

export default Add;
