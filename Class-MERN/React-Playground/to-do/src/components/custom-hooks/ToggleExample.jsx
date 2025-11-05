import { useToggle } from "../../hooks/useToggle";
import Button from "../../UI/Button";

const ToggleExample = () => {
  const [show, setShow] = useToggle(false);

  return (
    <div>
      <Button onClick={setShow}>{show ? "Hide" : "Show"}</Button>
      {show && (<p>Hidden text</p>)}
    </div>
  );
};

export default ToggleExample;
