const MenuItem = ({ openStatus, indexData, MenuSubData }) => {
  return (
    <div>
      {openStatus === indexData && (
        <div style={{ padding: "10px", backgroundColor: "#fff" }}>
          {MenuSubData?.map((item) => (
            <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
