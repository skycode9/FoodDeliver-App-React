import MenuItem from "./MenuItem";
import { useState } from "react";
import MenuTitle from "./MenuTitle";

const NestedMenu = ({ Categories, showItems, selected }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div>
      {showItems && (
        <div className="p-4">
          {Categories.map((elem, index) => {
            // Filter items for this category
            const categoryItems = elem?.itemCards || [];
            const filteredItems = selected === null
              ? categoryItems
              : categoryItems.filter(item =>
                  item?.card?.info?.itemAttribute?.vegClassifier === selected
                );

            // Don't render empty categories
            if (filteredItems.length === 0) return null;

            return (
              <div key={elem?.categoryId || index} className="mb-2">
                <MenuTitle
                  MenuTitle={elem?.title}
                  MenuLength={filteredItems.length}
                  setIsOpen={() =>
                    setIsOpen((prev) => (prev === index ? null : index))
                  }
                />

                <MenuItem
                  showItems={index === isOpen ? true : false}
                  MenuSubData={filteredItems}
                  selected={selected}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NestedMenu;
