function Button() {
  function handleClick() {
    alert("You clicked button...");
  }
  return (
    <button
      onClick={handleClick}
      className="p-2 border-2 m-3 rounded-xs"
    >
      Click here!!
    </button>
  );
}

export default Button;
