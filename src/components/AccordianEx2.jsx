// // /***Perfect! You're building an accordion, and you want this behavior:

//     Click on an item → it opens.

//     Click on the same item again → it closes.

//     Click on a different item → it switches to that one.

//     You also want to track the index.
//      */

//-----------------------------------//

// 🧠 What this does:

//     openIndex stores the currently open accordion item.

//     Clicking the same item sets it to null (closes it).

//     Clicking a different one updates the index.

//     You get full control of the index inside your handler.

//-----------//
import { useState } from "react";

const AccordianEx2 = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null); // Track which index is open

  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // Toggle logic
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mb-2 border p-4">
          <button
            onClick={() => handleClick(index)}
            className="w-full text-left font-bold"
          >
            {item.title}
          </button>

          {openIndex === index && (
            <div className="mt-2 text-gray-700">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordianEx2;
