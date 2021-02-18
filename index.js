
//forEach Implementation
const myEach = function(arr,callback){
  for(let i = 0; i < arr.length; i++){ // traverse the parameter array
    arr[i] = callback(arr[i]); // reassign values at each array index to its returned value from callback
  }
  return undefined;
}

//Map Implementation
const myMap = function(arr,callback){
  let new_array = []; // initialize array to be returned
  for(let i = 0; i < arr.length; i++){ // traverse the parameter array
    new_array.push(callback(arr[i])); // push returned callback value to new_array
  }
  return new_array; // return the new array
}

//filter Implementation
const myFilter = function(arr,callback){
  let new_array = []; // initialize array to be returned
  for(let i = 0; i < arr.length; i++){ // traverse the parameter array
    if(callback(arr[i]) === true){ // Callback returns true
      new_array.push(arr[i]); // push matched arr[i] to new array
    }
  }
  return new_array; // return the new array
}
