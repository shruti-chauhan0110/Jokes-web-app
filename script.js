const jokes =document.querySelector('#joke');




const jokeBtn=document.querySelector('#jokeBtn');



async function generateJokes(){


    try{


        const setHeader={


            headers: {


                Accept : "application/json"
            }
        }
        const res= await  fetch('https://icanhazdadjoke.com',setHeader);


        const data =await res.json();
       
        jokes.innerHTML=data.joke;


        
 }catch(err)
 {

        console.log(`the error is ${err}`);
    }
    
























}
jokeBtn.addEventListener('click',generateJokes);
generateJokes();