import React from "react";
import data from "./data";
import List from "./List";
import Add from "./Add";

function App() {
  const [people, setPeople] = React.useState(data);
  const [showAddButton, setShowAddButton] = React.useState(true);

  console.log({ people });
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays by Martin</h3>
        <List people={people} totalLength={people.length} />
        <button
          onClick={() => {
            setPeople([]);
            setShowAddButton(false);
          }}
        >
          clear all
        </button>
        {showAddButton && (
          <Add people={people} setPeople={(people) => setPeople(people)} />
        )}
      </section>
    </main>
  );
}

export default App;
