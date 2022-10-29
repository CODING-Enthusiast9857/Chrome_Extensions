const getJokes=async()=>{
    try{
        const res=await fetch("https://api.chucknorris.io/jokes/random");
        const data=await res.json();
        const joke=document.querySelector("#joke");
        joke.innerHTML=data.value;
    }catch(error){}
};
window.addEventListener("load",()=>{
    getJokes();
});