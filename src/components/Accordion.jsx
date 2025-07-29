import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: "300px", fontFamily: "Arial" }}>
      <div
        onClick={toggleAccordion}
        style={{
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Click to {isOpen ? "Collapse" : "Expand"}
      </div>

      {isOpen && (
        <div
          style={{
            padding: "10px",
            border: "1px solid #007BFF",
            borderTop: "none",
          }}
        >
          <p>This is the accordion content. You can put anything here!</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
