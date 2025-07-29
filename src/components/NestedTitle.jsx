import { BsArrowDownSquare } from "react-icons/bs";
import NestedItem from "./NestedItem";
import MenuItem from "./MenuItem";
import { useState } from "react";

const NestedTitle = ({ Categories, openStatus, indexData }) => {
  console.log(Categories);

  const [isOpen, setisOpen] = useState(0);

  return (
    <div>
      {openStatus === indexData && (
        <div className="px-4 py-4">
          {Categories.map((elem, index) => (
            <>
              <div
                className="flex justify-between cursor-pointer my-2"
                onClick={() => setisOpen(index)}
              >
                <div key={elem?.categoryId}>
                  {elem?.title}{" "}
                  {elem?.itemCards?.length && `(${elem?.itemCards?.length})`}
                </div>
                <div>
                  <BsArrowDownSquare />
                </div>
              </div>

              <MenuItem
                openStatus={isOpen}
                indexData={index}
                MenuSubData={elem?.itemCards}
                key={elem?.categoryId || index}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedTitle;
