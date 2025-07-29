import MenuItem from "./MenuItem";
import { useState } from "react";
import MenuTitle from "./MenuTitle";

const NestedMenu = ({ Categories, openStatus, indexData }) => {
  console.log(Categories);

  const [isOpen, setIsOpen] = useState(0);

  return (
    <div>
      {openStatus === indexData && (
        <div className="px-4 py-4">
          {Categories.map((elem, index) => (
            <>
              <MenuTitle
                MenuTitle={elem?.title}
                MenuLength={elem?.itemCards?.length}
                onClick={() => setIsOpen(index)}
                key={elem?.categoryId || index}
              />

              <MenuItem
                openStatus={isOpen}
                indexData={index}
                MenuSubData={elem?.itemCards}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedMenu;
