// USERS DETAILS DB...

let WALLET = 300000;
const CUST_ADDRESS = [
  {
    id: "USER001",
    flatNumber: "105",
    buildingName: "Sri Mallikarjuna PG",
    street: "Bollineni Homes",
    landmark: "Near Sai Baba Temple",
    city: "Hyderabad",
    state: "TG",
    pincode: "500072"
  },
  {
    id: "USER002",
    flatNumber: "208",
    buildingName: "Green Residency",
    street: "MG Road",
    landmark: "Opposite Metro Station",
    city: "Hyderabad",
    state: "TS",
    pincode: "560001"
  },
  {
    id: "USER003",
    flatNumber: "12B",
    buildingName: "Sunshine Apartments",
    street: "Park Street",
    landmark: "Near Central Mall",
    city: "Hyderabad",
    state: "TS",
    pincode: "500001"
  }
];

//ordered items
const orderItems = [ 

  {
    "name": "Wireless Mouse",
    "price": 850,
    "quantity": 2,
    "deliveryDateAndTime": "25-09-2025 11:00:00 AM"
  },
  {
    "name": "Bluetooth Headphones",
    "price": 2200,
    "quantity": 1,
    "deliveryDateAndTime": "26-09-2025 03:30:00 PM"
  },
  {
    "name": "USB-C Charger",
    "price": 1200,
    "quantity": 3,
    "deliveryDateAndTime": "27-09-2025 09:45:00 AM"
  },
  {
    "name": "Smartwatch",
    "price": 4999,
    "quantity": 1,
    "deliveryDateAndTime": "28-09-2025 02:15:00 PM"
  },
  {
    "name": "Portable SSD 1TB",
    "price": 6500,
    "quantity": 1,
    "deliveryDateAndTime": "29-09-2025 10:00:00 AM"
  }
];

// PLATFORM DETAILS

const DISCOUNT_MAPPINGS = {
  "FIRSTORDER": 10,
  "XMAS30": 30
}

const DELIVERY_PARTNERS = [
  {
    id: "DEL001",
    name: "Rajesh",
    drops: []
  },
  {
    id: "DEL002",
    name: "Arjun",
    drops: []
  },
  {
    id: "DEL003",
    name: "Vijay",
    drops: []
  }
];

const ORDERS = []; // globally for storing all orders


// Steps of Order placement and it's processing
/**
 * 1. Add to Cart
 * 2. Applying the Discount Coupons
 * 3. Selecting an address
 * 4. Payment processing
 * 5. Order is created/ placed
 * 6. Delivery tracking
 * 7. Feedback
 * 8. Order is successfully completed!
 **/

function payablePrice(orderItems,cupon){
  let totalPrice=0;
  let discount=DISCOUNT_MAPPINGS[cupon];
  let finalPrice=0;

  for(item of orderItems){
    totalPrice=totalPrice+(item.price*item.quantity);
  }
  console.log("Total price=",totalPrice);

  if(discount){
  discount=(discount/100)*totalPrice;
  console.log("Discount=",discount);

  finalPrice=totalPrice-discount;
  }else{
    console.log("no discount so total price ", totalPrice);
    return totalPrice;
  }

  console.log("Final Price",finalPrice);
  return  finalPrice;
}

function makePayment(price){
  if(price<=WALLET){
    WALLET=WALLET-price;
    console.log("Payment Successful")
  }else{
    console.log("Insufficient Balance")
  }
}

function selectAddress(address){
  let deliveryAddress=null;
  for(add of CUST_ADDRESS){
    if(add.id===address){
      deliveryAddress=add;
      console.log("Delivery Address",deliveryAddress);
      return deliveryAddress;
    }
  }
  console.log("Address doesn't match")
}

function newOrder(finalPrice,address){
  let order={
    orderID:"001",
    orderPrice:finalPrice,
    deliveryAddress:address,
    status:"PLACED"
  }
  console.log(order);
  return order;
}

function deliveryPartner(){

}

function placeOrder(orderItems, discountCoupon, address) { 
  let finalPrice=payablePrice(orderItems,discountCoupon);
  makePayment(finalPrice);
  let deliveryAddress=selectAddress(address);
  let order=newOrder(finalPrice,deliveryAddress);
  

}

placeOrder(orderItems,"XMAS30","USER003")
