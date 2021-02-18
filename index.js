
//forEach Implementation
const myEach = function(arr,callback){
  for(let i = 0; i < arr.length; i++){ // traverse the array
    arr[i] = callback(arr[i]); // reassign values at each array index to its returned value from callback
  }
  return undefined;
}
