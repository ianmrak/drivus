'use strict';
const massive = require('massive')
const db = massive.connectSync(process.env.DB_CONNSTRING);

function saveUber(parsedData) {
  for (let ride of parsedData.rides) {
  queryObj = {ride_type: ride.display_name,
              duration: '00:' + Math.floor(ride.duration/60) + ':' + (ride.duration%60),
              low_est: ride.low_estimate/100,
              high_est: ride.high_estimate/100,
              eta: '00:' + Math.floor(ride.eta/60) + ':' + (ride.duration%60),
              price_multiplier: ride.price_multiplier,
              start_lat: parsedData.coords.start.lat,
              start_lng: parsedData.coords.start.lng,
              end_lat: parsedData.coords.end.lat,
              end_lng: parsedData.coords.end.lng,
              distance_miles: ride.distance};
  db.uberhist.save(queryObj);
  }
}

function saveLyft(parsedData) {
  for (let ride of parsedData.rides) {
  queryObj = {ride_type: ride.display_name,
              duration: '00:' + Math.floor(ride.duration/60) + ':' + (ride.duration%60),
              low_est: ride.low_estimate/100,
              high_est: ride.high_estimate/100,
              eta: '00:' + Math.floor(ride.eta/60) + ':' + (ride.duration%60),
              price_multiplier: ride.price_multiplier,
              start_lat: parsedData.coords.start.lat,
              start_lng: parsedData.coords.start.lng,
              end_lat: parsedData.coords.end.lat,
              end_lng: parsedData.coords.end.lng,
              distance_miles: ride.distance};
  db.lyfthist.save(queryObj);
  }
}
module.exports.saveUber = saveUber;
module.exports.saveLyft = saveLyft;
