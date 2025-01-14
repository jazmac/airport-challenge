const { assertEquals } = require('../testing-framework');
const Airport = require(`../src/Airport.js`);
const Plane = require(`../src/Plane.js`);

let expected;
let actual;
let result;
let airport;
let plane;
let plane2;
let plane3;
let plane4;
let plane5;
let plane6;

// Test 1 - 'airportPlanes' length increases by 1 when 'landPlane' is called on an airport with Plane
console.log(`============================`);
console.log(`Test 1 - landPlane lands a Plane at the airport`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Something landed at airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 2 - landPlane should only land Plane instances to the airportManifest
console.log(`============================`);
console.log(`Test 2 - 'landPlane' only land 'Plane' instances to the airportManifest`);

// Arrange
airport = new Airport();
plane = 'something';
expected = 0;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2: Only Plane instances landed at airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 3 - falsy values should not be added to Airport

console.log(`============================`);
console.log(`Test 3 - null values should not be added to Airport`);

// Arrange
airport = new Airport();
plane = null;
expected = 0;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3: null values should not be added to Airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 4 - Set default defined maximum airport capacity size to 10

console.log(`============================`);
console.log(`Test 4 - airport capacity set to 10`);

// Arrange
airport = new Airport();
expected = 10;

// Act
actual = airport.maximumCapacity;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 4 - airport capacity is set to 10: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 5 - Change defined maximum airport capacity to 5

console.log(`============================`);
console.log(`Test 5 - Change maximum airport capacity to 5`);

// Arrange
airport = new Airport();
expected = 5;

// Act
airport.setCapacity(5);
actual = airport.maximumCapacity;



// Assert
result = assertEquals(expected, actual);
console.log(`Test 5 - Change maximum airport capacity to 5: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 6 - Check that you can't add planes beyond set airport capacity

console.log(`============================`);
console.log(`Test 6 - Check that you can't add planes beyond set airport capacity`);

// Arrange
airport = new Airport();
plane = new Plane();
plane2 = new Plane();
plane3 = new Plane();
plane4 = new Plane();
plane5 = new Plane();
plane6 = new Plane();
expected = 5;

// Act
airport.setCapacity(5);
airport.landPlane(plane)
airport.landPlane(plane2)
airport.landPlane(plane3)
airport.landPlane(plane4)
airport.landPlane(plane5)
airport.landPlane(plane6)

actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 6 - Check that you can't add planes beyond set airport capacity: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 7 - `airportPlanes` length decreases to 0 when plane is found and removed from 1 airport

console.log(`============================`);
console.log(`Test 7 - airportPlanes length decreases to 0 when plane is found and removed from 1 airport`);

// Arrange
airport = new Airport();
plane = new Plane(`plane1`);
airport.landPlane(plane);
expected = airport.airportPlanes.length - 1;

// Act
airport.takeoffPlane(plane);
actual = airport.airportPlanes.length;

// Assert

result = assertEquals(expected, actual);
console.log(`Test 7 - airportPlanes length decreases to 0 when plane is found and removed from 1 airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 8 - return true value if plane is within the airport.

console.log(`============================`);
console.log(`Test 8 - return true value if plane is within the airport`);

// Arrange
airport = new Airport();
plane = new Plane(`plane1`);
airport.landPlane(plane);
expected = true;

// Act
airport.landPlane(plane);
actual = airport.planeAtAirport(plane);

// Assert

result = assertEquals(expected, actual);
console.log(`Test 8 - return true value if plane is within the airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 9 - `landPlane` method does not execute when `planeAtAirport` method is not true

console.log(`============================`);
console.log(`Test 9 - landPlane method does not execute when planeAtAirport method is not true`);

// Arrange
airport = new Airport();
plane = new Plane(`plane`);
airport.landPlane(plane);
airport.landPlane(plane);
expected = 1;

// Act
actual = airport.airportPlanes.length;

// Assert

result = assertEquals(expected, actual);
console.log(`Test 9 - landPlane method does not execute when planeAtAirport method is not true: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 10 - planeTakeOff method does not execute when planeAtAirport method is false

console.log(`============================`);
console.log(`Test 10 - planeTakeOff method does not execute when planeAtAirport method is false`);

// Arrange
airport = new Airport();
plane = new Plane(`plane`);
plane2 = new Plane(`plane`);
airport.landPlane(plane);
airport.takeoffPlane(plane2);
expected = 1;

// Act
actual = airport.airportPlanes.length;

// Assert

result = assertEquals(expected, actual);
console.log(`Test 10 - planeTakeOff method does not execute when planeAtAirport method is false: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);