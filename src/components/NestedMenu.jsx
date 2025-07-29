import MenuItem from "./MenuItem";
import { useState } from "react";
import MenuTitle from "./MenuTitle";

const NestedMenu = ({ Categories, openStatus, indexData }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div>
      {openStatus === indexData && (
        <div className="p-4">
          {Categories.map((elem, index) => (
            <div key={elem?.categoryId || index}>
              <MenuTitle
                MenuTitle={elem?.title}
                MenuLength={elem?.itemCards?.length}
                onClick={() => setIsOpen(index)}
              />

              <MenuItem
                openStatus={isOpen}
                indexData={index}
                MenuSubData={elem?.itemCards}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedMenu;
