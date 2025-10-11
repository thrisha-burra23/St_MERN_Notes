// Array of driver objects
const DRIVERS = [
  { id: "D001", name: "Arjun", available: true },
  { id: "D002", name: "Meera", available: true },
  { id: "D003", name: "Rahul", available: false }
];

// Array of rider objects
const RIDERS = [
  { id: "R001", name: "Sundeeep", walletBalance: 1000 },
  { id: "R002", name: "Keerthi", walletBalance: 200 }
];

// Empty array to store ride objects
const RIDES = [];


function matchDrivers(drivers) {
  for (let driver of drivers) {
    if (driver.available === true) {
      console.log(driver);
      return driver;
    }
  }
}

function calculateFare(distance, ratePerKM) {
  console.log("Fare=", (distance * ratePerKM));
  return distance * ratePerKM;
}

function processPayment(riderId, fare) {

  for (const rider of RIDERS) {
    if (rider.id === riderId) {
      if (rider.walletBalance >= fare) {
        rider.walletBalance -= fare;
        console.log("WalletBalance=",rider.walletBalance);
        console.log(rider);
        return rider;
      } else {
        console.log("Insufficient Balance");
        return null;
      }
    }
  }
  
}

function createRide(rider, driver, distance, fare) {
  let ride = {
    rideId: "R001",
    riderId: rider,
    driverId: driver.id,
    distance: distance,
    fare: fare,
    status: "CONFIRMED"
  }
  console.log(ride);
  return ride;
}

function saveRides(rides, ride, driverAvailable) {
  rides.push(ride);
  for (const driver of DRIVERS) {
    if(driver.id === driverAvailable.id){
      driver.available = false;
      driverAvailable.available = false;
    }
  }
  console.log({
    rides: rides,
    // driver: driverAvailable
  });

  // return {
  //   rides: rides,
  //   // driver: driverAvailable
  // }
  return rides;
}

function requestRide(riderId, distance) {
  let driver = matchDrivers(DRIVERS);
  let fare = calculateFare(distance, 20);
  let rider = processPayment(riderId, fare);
  if (!rider) return null; //stops complete execution
  let ride = createRide(riderId, driver, 10, fare);
  let savedRides= saveRides(RIDES, ride, driver);

  console.log("Ride Confirmed: ",savedRides);
  console.log("Updated Driver:", driver);
  console.log("Updated Rider:", rider);


}

requestRide("R001", 10);

