import { useState } from "react";

const UnControlledFormApp = () => {
  const [name, setName] = useState("");

  const handleFormChange = (event) => {
    let nameInput = event.target.value;

    setName((prevName) => (prevName = nameInput));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
    };

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <input
        className="bg-white placeholder-gray-400 border m-5 p-3"
          type="text"
          placeholder="Enter name"
          required
          onChange={(event) => handleFormChange(event)}
        />
        <button className="border p-3 bg-red-400 hover:bg-red-500" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default UnControlledFormApp;
