import React, { useEffect, useState } from "react";

export default function UsesEffect() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("this is pointing");
    document.title = `you clicked ${count}`;
  },[count]);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}
