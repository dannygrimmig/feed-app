import * as React from "react";
import { Filter } from "../Filter/Filter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export function FilterCategory(props) {
  const { text, filters = [], onFilterChange = () => {} } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-2 relative">
      <button
        className={`cursor-pointer border rounded-full block text-center px-4 py-2 ${
          isOpen ? "bg-slate-200" : "bg-white"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {text}
        <ArrowDropDownIcon />
      </button>

      <div className={`absolute top-full z-10 w-full ${!isOpen && "hidden"}`}>
        <div className="flex flex-col gap-2 mt-2 items-center">
          {filters.map((filter) => (
            <Filter
              key={filter}
              text={filter}
              onClick={(isActive) => {
                onFilterChange(filter, isActive);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
