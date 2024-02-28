import * as React from "react";

export function Filter(props) {
  const { text, onClick = () => {} } = props;
  const [isActive, setIsActive] = React.useState(false);

  return (
    <button
      className={`cursor-pointer border rounded-full flex justify-center items-center px-4 py-1 ${
        isActive && "bg-slate-200"
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
