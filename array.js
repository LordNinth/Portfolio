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

  //adding job title
  const graduate = { name: "Jonny JavaScript", course: "Software Development", graduationYear: 2020 },
  function addJobTitle(graduates) {
    // Write your code here
    let obj = [];
    graduates.forEach(graduate =>{
       if(graduate.course == "Software Development"){
        graduate.jobTitle = graduate.graduationYear <2020 ? "Senior Software Developer": "Junior Software Developer";
        obj.push(graduate);       
        }
       else
       {
        graduate.jobTitle = graduate.graduationYear <2020  ? "Senior Data Engineer": "Junior Data Engineer";
        obj.push(graduate)
        }
    })
   
    return obj
    }

    //finding middle string

    function returnMiddleCharacter(string) {
      // Write your code here
      let oddMiddle;
      let evenMiddle;
      let result;
      //for odd string
      if(string.length%2!==0){
          oddMiddle =    string.length/2; 
          result = string.charAt(oddMiddle)
      }else{ //for even string
           oddMiddle = string.length/2
           evenMiddle = string.length/2 -1
           result =  string.charAt(evenMiddle) + string.charAt(oddMiddle)
      }
      return result
      }

      //find x in the grid
      function findTheX(grid) {
        let result = ""
        // Write your code here
        console.log(grid)
        for(let i=0; i<grid.length;i++){
            let row = i;
            //console.log(grid[i])
            for(let j=0; j<grid[i].length;j++){
                let column = j;
                if(grid[i][j]== "X"){
                    console.log(grid[i][j])
                    result = `X was found on row ${row} and column ${column}`;
                    return result
                }else{
                   result = 'No X found'
                }
            }
        }
        return result
        }