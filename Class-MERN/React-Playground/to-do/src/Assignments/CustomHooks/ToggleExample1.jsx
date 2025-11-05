import { useToggle } from "../../hooks/useToggle";
import Button from "../../UI/Button";

const ToggleExample1 = () => {
  const [show, setShow] = useToggle(false);
   const [reveal, setReveal] = useToggle(false);

  return (
    <div>
      <Button onClick={setShow}>{show ? "Hide" : "Show"}</Button>
      {show && (<p>Hidden text</p>)}

      <Button onClick={setReveal}>{reveal?"hide Secret":"reveal"}</Button>
      {reveal && (<p>Revealed...</p>)}
    </div>
  );
};

export default ToggleExample1;