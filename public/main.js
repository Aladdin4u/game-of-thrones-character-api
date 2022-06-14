document.getElementById("clickMe").addEventListener("click", apiRequest);

async function apiRequest () { 
    document.getElementById('characters').innerHTML="";
   try {
    const house = document.querySelector('input').value; 
    const response = await fetch(`https://game-of-throne-api.herokuapp.com/api/houses/${house}`)
    const data = await response.json()

    console.log(data)
    const characterElement = data.character;
    document.getElementById('charHouse').textContent = `House of ${house} character are:`
    
    characterElement.forEach(element => {
        const character = document.querySelector('#characters');
        const listElement = document.createElement('li');
        listElement.textContent= element;
        character.appendChild(listElement);
    })
   }
    catch(error) {
        console.log(error)
        document.getElementById('characters').innerHTML= "Wrong house name";
    }
}