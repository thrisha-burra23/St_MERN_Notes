const FE_BE_Connection = () => {
  const handleFtech = async () => {
    const url = "http://localhost:8000/testing";
    const options = {
      method:"POST",
      <body>
        
      </body>
    };

    const res = fetch(url, options);
  };
  return (
    <>
      <button className="border">Send</button>
    </>
  );
};

export default FE_BE_Connection;
