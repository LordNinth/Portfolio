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

const tallyCar = data.reduce((total, item)=>{
  if(!total[item]){
    total[item] = 0
  }
  total[item]++
  return total;
},{})
console.log(tallyCar)