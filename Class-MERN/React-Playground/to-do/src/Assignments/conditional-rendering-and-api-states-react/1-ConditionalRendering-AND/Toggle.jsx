import { useState } from "react";
import Details from "./Details";
import Button from "../components/Button";

const Toggle = () => {
  const [show, setShow] = useState(false);
  const [extraShow, setExtraShow] = useState(false);

  const handleToggle = (event) => {
    event.stopPropagation();
    setShow(!show);
  };

  const handleShowExtraDetails = () => {
    setExtraShow(!extraShow);
  };

  return (
    <div className="flex">
      <div>
        <Button onClick={(event) => handleToggle(event)}>
          {show ? "Hide" : "Show"}
        </Button>

        {show && <Details  />}
      </div>
      <div>
        <Button  onClick={handleShowExtraDetails}>{extraShow?"Hide":"Show"} Extra details...</Button>
        {extraShow && <p>Extra details</p>}
      </div>
    </div>
  );
};

export default Toggle;
