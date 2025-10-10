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
let RIDES = [];



function matchDriver(DRIVERS){
    for(const i in DRIVERS){
        if( DRIVERS[i].available === true){
          // console.log(DRIVERS[i].available)
          return DRIVERS[i];
        }
            
    }
    console.log("No drivers available");
    return 0;
}

function calculateFare(distance,ratePerKm){
    const fare = distance*ratePerKm;
    return fare;
}
function processPayment(rideId,fare){
    for(const  rider of RIDERS){
        if(rider.id===rideId){
            if(rider.walletBalance>=fare){
              // console.log(rider);
              rider.walletBalance-=fare;
                return rider;
            }
            else{
                console.log("Insuffecient Balance");
                return null;
            }
        }
    }
}

function createRide(rider,driver,distance,fare){
    let rideDetails ={
        rideId : 101,
        riderId : rider.id,
        driverId : driver.id,
        distance : distance,
        fare : fare,
        status : "CONFIRMED"
    }
    return rideDetails;
}
function saveRide(rides, ride ,driver){
    rides.push(ride);
    const updated_driver = {...driver , available : false};
    rides.push(updated_driver);
    return rides;
}

function requestRide(riderId,distance){
    const driver = matchDriver(DRIVERS);
    // console.log(driver);
    const price = calculateFare(distance,20);
    // console.log(price);
    const rider = processPayment(riderId,price);
    const ride_details = createRide(rider,driver,distance,price);
    // console.log(ride_details);
    saveRide(RIDES,rider,driver);
    console.log(RIDES);
    const updated_driver = RIDES[1];


    console.log("Ride Confirmed: ",ride_details);
     console.log("updated Rider: ",rider);
    console.log("Updated Driver :",updated_driver);
    console.log("All Rides :",RIDES);

    // console.log(DRIVERS);

}

requestRide("R001",10);