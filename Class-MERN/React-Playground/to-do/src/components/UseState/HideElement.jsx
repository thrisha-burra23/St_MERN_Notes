import { useState } from "react";

const HideElement = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="bg-red-500 hover:bg-red-600" onClick={handleClick}>
        {show ? "Hide" : "Show"}
      </button>
      {(show) && <p>Hided Text...</p>}
    </div>
  );
};

export default HideElement;
