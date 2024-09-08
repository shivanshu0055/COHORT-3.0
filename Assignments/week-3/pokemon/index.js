let pokes=[]

function render(){
    pokes.forEach((pokemon)=>{
        const newCard=document.createElement("div")
        newCard.className="card"
        newCard.innerHTML=`
        <div class='pokeCardImage'>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png' alt="" class="pokeImg">
            </div>
            <br>
            <div class="pokeStats">
               <li style="list-style-type:none;">Name : ${pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</li>
               <li style="list-style-type:none;">Type : ${document.querySelector("#typeOfPoke").value[0].toUpperCase()+document.querySelector("#typeOfPoke").value.slice(1)}</li>
               <li style="list-style-type:none;">Ability : ${pokemon.abilities[0].ability.name[0].toUpperCase()+pokemon.abilities[0].ability.name.slice(1)}</li>
               <li style="list-style-type:none;">Height : ${pokemon.height}</li>
               <li style="list-style-type:none;">Weight : ${pokemon.weight}</li>
               <li style="list-style-type:none;">Experience : ${pokemon.base_experience}</li>
            </div>
        `
        document.querySelector("#pokedex").appendChild(newCard)
    })
}

function findPokes(){
 
const numOfPoke=parseInt(document.querySelector("#numOfPoke").value)
const typeOfPoke=document.querySelector("#typeOfPoke").value

async function fetchProcess(){
    let n=0;
    let pokenum=1
    let url
    pokes=[]
    const promises = [];
    
    while (pokenum <= 500) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokenum}`;
        promises.push(fetch(url).then(response => response.json()));
        pokenum++;
    }
    
       const arr=await Promise.all(promises)
       arr.forEach((pokedata)=>{
        if(n<numOfPoke){
        pokedata.types.forEach((X)=>{
            if(X.type.name==typeOfPoke){
                pokes.push(pokedata)
                n++;
            }
        })
    }
       })
       
        console.log(n);
        console.log(pokenum);
        document.querySelector("#pokedex").innerHTML=""
        render()
    }
    fetchProcess();
    console.log(pokes);

}
