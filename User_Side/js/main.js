///////////// All Javascript here //////////////////////

document.querySelector('button').addEventListener('click', getInfo);


async function getInfo(){
    const player = document.querySelector('input').value;
    

   try{ 
    const res = await fetch(`https://simple-nba-api.herokuapp.com/api/players/${player}`);
    const data = await res.json();
 
    if(data.name === 'unknown'){
        document.querySelector('h2').innerHTML = data.name;
    } else {
    console.log(data)
    document.querySelector('#name').innerHTML = data['name'];
    document.querySelector('#age').innerHTML = 'Number ' + data.number;
    document.querySelector('#location').innerHTML = data['hometown']
    }
    } catch(err){
    console.log(`err ${err}`)
    }
}