import { useState } from "react";

// TODO: Set up props to make the button reusable
interface ButtonProps {
  readonly method?: () => void;
  readonly text: string;
}
export default function Button({ text, method }: ButtonProps) {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={method}
      className="bg-blue-500 text-white hover:bg-blue-800 rounded-md px-6 py-4 transition duration-150 ease-linear hover:shadow-md"
    >
      {text}
    </button>
  );
}
