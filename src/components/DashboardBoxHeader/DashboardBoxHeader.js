import * as React from "react";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

export function DashboardBoxHeader(props) {
  const { header, isEditing, setIsEditing } = props;
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-header w-max">{header}</h1>

      <button
        className={`${isEditing && "font-header"}`}
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? <DoneOutlineOutlinedIcon /> : <EditOutlinedIcon />}
      </button>
    </div>
  );
}
