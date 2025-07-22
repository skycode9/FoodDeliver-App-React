import React from "react";

const MenuItem = ({ openStatus, indexData, MenuSubData }) => {
  return (
    <div>
      {openStatus === indexData && (
        <div style={{ padding: "10px", backgroundColor: "#fff" }}>
          {MenuSubData?.map((item) => (
            <div>{item?.card?.info?.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
