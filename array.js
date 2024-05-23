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

countTheLetters("hello", "h");