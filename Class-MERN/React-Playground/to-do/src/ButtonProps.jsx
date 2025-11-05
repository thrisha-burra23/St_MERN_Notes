function ButtonPorps({ onclick, message }) {
    
  return <button onClick={onclick} className="border m-3">{message}</button>;
}

export default ButtonPorps;
