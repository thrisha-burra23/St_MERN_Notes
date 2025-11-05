import { useState } from "react";

const ControlledFormApp = () => {
  let nameFromGoogle = "Nisha";
  let emailFromGoogle = "nisha@gmail.com";
  const [name, setName] = useState(nameFromGoogle);
  const [email, setEmail] = useState(emailFromGoogle);
  const [age, setAge] = useState(0);

  const handleForm = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      age: age,
    };

    console.log(data);
  };

  return (
    <form
      className="flex p-5 bg-green-500 border-2 flex-col rounded-xl gap-3 items-center border-green-600 "
      onSubmit={(event) => handleForm(event)}
    >
      <input
       className=" bg-white"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <input
        className=" bg-white"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <input
       className=" bg-white"
        type="text"
        onChange={(event) => setAge(event.target.value)}
        value={age}
      />
      <button className="bg-red-400 hover:bg-red-600 p-1" type="submit">Submit</button>
    </form>
  );
};

export default ControlledFormApp;
