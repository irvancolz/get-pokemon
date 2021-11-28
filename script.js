
const pokeContainer = document.querySelector('.poke-container');
const pokeNumber =  30;
const colors = {
    grass :"#53f575",
    fire : "#ee5656",
    water : "#56eed8",
    bug : "#cd7444",
    normal : "#b9ada7",
    poison : "#c37bc6",
    electric :"#e4e743",
    ground : "#70665e"
}

const mainType = Object.keys(colors)

const fetchPokemon = async () =>{
    for(let i =1; i <= pokeNumber; i++){
        await getPokemon(i);
    }
}

const getPokemon = async id =>{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + `${id}`);
    const pokemon = await res.json();
    createPokeCards(pokemon)
}
 
 function createPokeCards (pokemon){
     const pokeEl = document.createElement('div');
     pokeEl.classList.add('pokeCards');

     const pokeId = pokemon.id;
     const name = pokemon.name;
     const pokeType = pokemon.types[0].type.name;
    //  const type = mainType.find(type => pokeType.indexOf(type) > -1)
     const pokeImg = pokemon.sprites.front_default;
     const pokeBgColor = colors[pokeType]; 


     pokeEl.style.backgroundColor = pokeBgColor;
     const pokeInnerHTML = `
        <p class="pokeId">${pokeId}</p>
        <div class="img-container">
             <img src="${pokeImg}" alt="">
       </div>
       <h5>${name}</h5>
       <p class="pokeType">${pokeType}</p>

     `;

     pokeEl.innerHTML = pokeInnerHTML;
     pokeContainer.appendChild(pokeEl);

 }




 const triggerBtn = document.querySelector('.trigger-btn');
 triggerBtn.addEventListener('click', fetchPokemon);
 triggerBtn.addEventListener('click', ()=>{
     triggerBtn.style.transform = "rotate(360deg)";
 })
