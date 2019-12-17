import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>{ninja.name}</div>
        <div>{ninja.age}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          DELETE
        </button>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
