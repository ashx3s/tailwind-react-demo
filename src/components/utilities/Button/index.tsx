import { useState } from "react";

// TODO: Set up props to make the button reusable

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className="bg-blue-500 px-6 py-4 rounded-md text-white hover:bg-blue-800 hover:shadow-md transition ease-linear duration-150"
    >
      count is {count}
    </button>
  );
}
