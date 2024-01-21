const baseUrl =
  "https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/";
const container = document.querySelector("#container");

for (let i = 1; i < 152; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  label.innerText = i;
  const newImg = document.createElement("img"); //for each i, create img element
  newImg.src = `${baseUrl}${i}.png`; //add src
  container.appendChild(pokemon);
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  pokemon.classList.add("pokemon"); //adding class through js
}

//<container> <pokemon><newImg></newImg> <label></label></pokemon></container>
