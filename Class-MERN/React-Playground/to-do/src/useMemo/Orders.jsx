import { useEffect, useMemo, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const computedValue = useMemo(() => heavyFn(), [orders]);

  function heavyFn() {
    console.log("useMemo Called");
    return [1, 2, 3, 4, 5, 6];
  }
  console.log("outside->", computedValue);

  useEffect(() => console.log("orders are updated"), [orders]);

  function handleCreateNewOrder() {
    console.log("use create new order clicked ");
    const newOrder = {
      id: 1,
      price: 200,
      OrderName: "Order2",
    };
    //setOrders((prevOrders) => [...prevOrders, newOrder]);
    setOrders((prevOrders) => {
      prevOrders.push(newOrder);
    });
  }

  return (
    <>
      <h1>Use Memo...</h1>
      <button
        onClick={handleCreateNewOrder}
        className="border-2 bg-amber-300 p-2"
      >
        Create Order
      </button>
    </>
  );
};

export default Orders;
