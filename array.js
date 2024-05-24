const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

let obj = {}
//i is a variable, there need bracket notation to view it
data.forEach(i=>{
    if(!obj[i]){
        obj[i] = 0;
    }
    obj[i] = obj[i]+1
    return obj
  })
//reduce
const tallyCar = data.reduce((total, item)=>{
  if(!total[item]){
    total[item] = 0
  }
  total[item]++
  return total;
},{})
//string index can be accessed by .charAt() method

function countTheLetters(string, letter) {
  // Write your code here
  let count = 0;

  // looping through the items
  for (let i = 0; i < string.length; i++) {

      // check if the character is at that position
      if (string.charAt(i) == letter) {
          count += 1;
      }
  }
  console.log(count)
  return count;
}

//find first and last in array

function getNestedFirstAndLast(array) {
  // Write your code here

  let result = []
  const lastItem = array.length -1
  let lastArrayLastItem = [];
  //greater than 1
  if(array.length>1){
      lastArrayLastItem = array[lastItem].length - 1
      result.push(array[0][0],array[lastItem][lastArrayLastItem])
      return result
      //equal to 1
  }else if (array.length == 1){
      result.push(array[0][0], array[0][1])
      return result
     //else
  }else{
      return result
  }
  }