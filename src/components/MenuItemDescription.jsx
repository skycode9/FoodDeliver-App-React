import React, { useState } from "react";

const MenuItemDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const worldLimit = 30;
  const words = text.split(" ");
  const isLong = words.length > worldLimit;

  const shownDescription = expanded
    ? text
    : words.slice(0, worldLimit).join(" ") + (isLong ? "..." : "");

  return (
    <div>
      <p>{shownDescription}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 text-blue-400 hover:underline font-medium cursor-pointer"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default MenuItemDescription;
