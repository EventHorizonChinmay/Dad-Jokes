//https://www.youtube.com/watch?v=-7JSF_aATJg&ab_channel=JavaScriptKing
const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apikey = "AZnDczIrTxNgCpGieoe+Qg==zvqDEvW4XqMo05Ya"

const options ={
    method:"GET",
    headers: {
        "X-Api-Key": apikey,
    },
};
// 50:00  in video

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try{
            //console.log('Clicked')
    jokeEl.innerText= ('Loading...');
    btnEl.ariaDisabled = true;
    btnEl.innerText = 'Loading...' 
    const response = await fetch(apiURL, options)
    
    const data = await response.json();
    btnEl.innerText = "Tell me a joke"
    //console.log(data[0])
    jokeEl.innerText = data[0].joke;


    }
    catch (error){
        jokeEl.innerText = ("Error Occured:\n Try again later")

    }

}


btnEl.addEventListener("click", getJoke)