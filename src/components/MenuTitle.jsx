import { BsArrowDownSquare } from "react-icons/bs";
const MenuTitle = ({ MenuTitle, MenuLength, onClick }) => {
  console.log(MenuTitle);

  return (
    <div>
      <div
        className="flex justify-between items-center bg-gray-500 text-white px-2 cursor-pointer"
        onClick={onClick}
      >
        <div>
          {MenuTitle} {MenuLength && `(${MenuLength})`}
        </div>
        <div>
          <BsArrowDownSquare />
        </div>
      </div>
    </div>
  );
};

export default MenuTitle;
