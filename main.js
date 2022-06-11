document.getElementById("clickMe").addEventListener("click", apiRequest);

async function apiRequest () {
   const rappersName = document.querySelector('rapper').value; 
   try {
    const response = await fetch(`https://game-of-throne-api.herokuapp.com/api/houses/${rappersName}`)
    const data = await response.json()

    console.log(data)
    document.querySelector('h2').innerHTML = data.name
   }
    catch(error) {
        console.log(error)
    }
}