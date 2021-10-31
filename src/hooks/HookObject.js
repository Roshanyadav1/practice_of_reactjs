import React,{useState} from "react";

export default function HookObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
      <div>
        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>your first name is {name.firstName}</h2>
        <h2>your first name is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </div>
  );
}
