// TODO: Set up props to make the button reusable
interface ButtonProps {
  readonly method?: () => void;
  readonly text: string;
}
export default function Button({ text, method }: ButtonProps) {
  return (
    <button
      onClick={method}
      className="text-white rounded-md bg-hol-blue px-6 py-4 transition duration-150 ease-linear hover:bg-hol-blue-dark hover:shadow-md"
    >
      {text}
    </button>
  );
}
