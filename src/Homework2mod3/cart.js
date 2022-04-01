import { Component, useState, useEffect } from "react";

export default function CartPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("will be called every render");
  });

  useEffect(() => {
    console.log("only be called in initialization");
  }, []); //ComponentDidMount

  useEffect(() => {
    console.log("Total item", count);
    if (count < 0) setCount(0);
  }, [count]); // ===

  return (
    <div>

      <button onClick={() => setCount((prevState) => prevState + 1)}>
        selected
      </button>

      <button onClick={() => setCount((prevState) => prevState - 1)}>
        deselected
      </button>

      <hr />
    </div>
  );
}