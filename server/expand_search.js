'use strict';
const lyft = require('./lyft.js');
const uber = require('./uber.js');
const genRadius = require('./generate_radius.js');

function checkIfOptimalPrice(rideOptions, optimalPrice) {
  if (!optimalPrice.ride) {
    optimalPrice.ride = rideOptions.rides[0];
    optimalPrice.coords = rideOptions.coords;
  }
  // console.log('Completed Ride Options obj: ', rideOptions);
  rideOptions.rides.forEach((option) => {
    // console.log('Entered forEach block', option);
    console.log('OPTION: ', option.display_name, ' Surge:', option.price_multiplier, ' Est:', option.avg_estimate, ' Time:',  option.eta + option.duration,  ' Coords:',  rideOptions.coords.start)
    if (option.price_multiplier < optimalPrice.ride.price_multiplier &&
        option.avg_estimate < optimalPrice.ride.avg_estimate && 
        option.display_name !== 'UberTAXI') {
          console.log('Better multiplier and price')
          optimalPrice.ride = option;
          optimalPrice.coords = rideOptions.coords;
    }
    if (option.price_multiplier === optimalPrice.ride.price_multiplier &&
        option.avg_estimate === optimalPrice.ride.avg_estimate && 
        option.display_name !== 'UberTAXI') {
      console.log('Same multiplier and price')
      if ((option.eta + option.duration < optimalPrice.ride.eta + optimalPrice.ride.duration ) ||
          option.distance < optimalPrice.ride.distance) {
        console.log('Better eta or distance')
        optimalPrice.ride = option;
        optimalPrice.coords = rideOptions.coords;
      }
    }
  });
  console.log('BEST: ', 'Product:', optimalPrice.ride.display_name, ' Surge:', optimalPrice.ride.price_multiplier, ' Est:',  optimalPrice.ride.avg_estimate,  ' Time:',  optimalPrice.ride.eta + optimalPrice.ride.duration,  ' Coords:',  optimalPrice.coords.start);
  return optimalPrice;
}

// function checkIfOptimalTime(rideOptions, optimalTime) {
//   if (!optimalTime.ride) {
//     optimalTime.ride = rideOptions.rides[0];
//     optimalTime.coords = rideOptions.coords;
//   }
//   rideOptions.rides.forEach((option) => {
//     if ((option.duration + option.eta) < (optimalTime.ride.duration + optimalTime.ride.eta)  && option.display_name !== 'UberTAXI') {
//       optimalTime.ride = option;
//       optimalTime.coords = rideOptions.coords;
//     }
//     if ((option.duration + option.eta) === (optimalTime.ride.duration + optimalTime.ride.eta)  && option.display_name !== 'UberTAXI') {
//       if (option.avg_estimate < optimalTime.ride.avg_estimate || option.distance < optimalTime.ride.distance) {
//         optimalTime.ride = option;
//         optimalTime.coords = rideOptions.coords;
//       }
//     }
//   });
//   console.log('OPTIMAL TIME OPTION: ', 'Product: ', optimalTime.ride.display_name,  'Estimate: ',  optimalTime.ride.avg_estimate,  'TotalTime: ',  optimalTime.ride.eta + optimalTime.ride.duration,  'Coords: ',  optimalTime.coords.start);
//   return optimalTime;
// }

// Receives the user's selected starting location
function expandSearch(startCoords, radius) {
  const uberPromiseList = [];
  const lyftPromiseList = [];

  return genRadius.createGeoRadius(startCoords, radius) // generates a radius of GPS points around a starting point
    .then((data) => {
      console.log(data);
      data.forEach((coordPair) => { // For all coordinates around starting point, generates Start and End pairs based on destination
        const newStartEnd = {
          start: coordPair,
          end: startCoords.end
        };
        uberPromiseList.push(uber.uberRequest(newStartEnd));
        lyftPromiseList.push(lyft.lyftRequest(newStartEnd));
      });

      return Promise.all([Promise.all(uberPromiseList), Promise.all(lyftPromiseList)]);
    })
    .catch(function(err) {
    });
}


module.exports.expandSearch = expandSearch;
module.exports.checkIfOptimalPrice = checkIfOptimalPrice;
// module.exports.checkIfOptimalTime = checkIfOptimalTime;
