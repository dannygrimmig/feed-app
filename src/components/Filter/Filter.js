import * as React from "react";

export function Filter(props) {
  const { text, onClick = () => {} } = props;
  const [isActive, setIsActive] = React.useState(false);

  return (
    <button
      className={`cursor-pointer border rounded-full block text-center px-4 py-2 ${
        isActive ? "bg-slate-200" : "bg-white"
      }`}
      onClick={() => {
        onClick(!isActive);
        setIsActive(!isActive);
      }}
    >
      {text}
    </button>
  );
}
