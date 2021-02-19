/*
  myEach() calls a provided callback function once for each element in an array in ascending order.

  callback is invoked with three arguments:
  - the value of the element
  - the index of the element
  - the Array object being traversed

  myEach returns undefined
*/
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // callback function
  }

  return undefined;
};

/*
  myMap() calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.

  callback is invoked only for indexes of the array which have assigned values (including undefined).

  myMap() returns a new array containing the results of calling a function on every element in this array.
*/
Array.prototype.myMap = function(callback) {
  let new_array = []; // initialize new array

  for (let i = 0; i < this.length; i++) {
    new_array.push(callback(this[i], i, this)); // push returned callback value to new_array
  }

  return new_array; // return new array
};

/*
  myFilter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true.

  callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.
  Array elements which do not pass the callback test are skipped, and are not included in the new array.

  myFilter returns a new array with the elements that pass the test.
  If no elements pass the test, an empty array will be returned.
*/
Array.prototype.myFilter = function(callback) {
  let new_array = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      // Callback returns true
      new_array.push(this[i]); // push matched arr[i] to new array
    }
  }

  return new_array; //return new array
};

/**
 * mySome
 * Returns `true` if at least one element in this array satisfies the testing function.
 * @callback: testing function, invoked per element to check for truthy value
 */
Array.prototype.mySome = function(callback) {
  // iterate over every element in array
  for (let i = 0; i < this.length; ++i) {
    // if even one element invokes true, short circuit and return true
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  // at this point we're guaranteed all elements invokes false, we're done
  return false;
};
