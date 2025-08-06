import MenuItem from "./MenuItem";
import { useState } from "react";
import MenuTitle from "./MenuTitle";

const NestedMenu = ({ Categories, showItems }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div>
      {showItems && (
        <div className="p-4">
          {Categories.map((elem, index) => (
            <div key={elem?.categoryId || index} className="mb-2">
              <MenuTitle
                MenuTitle={elem?.title}
                MenuLength={elem?.itemCards?.length}
                setIsOpen={() =>
                  setIsOpen((prev) => (prev === index ? null : index))
                }
              />

              <MenuItem
                showItems={index === isOpen ? true : false}
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
