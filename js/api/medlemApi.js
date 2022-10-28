// Medlem Start

// mine variabler
const onSubmit = use => {
    use.preventDefault(); 
    let ny = document.querySelector(".nyt-medlem");
    const validation=document.querySelector("#valid"),
    head=document.querySelector(".headline-valid"),
    remove=document.querySelectorAll(".removes");

// min variable til elementer der skal postes
    let post={
        name:use.target.elements.name.value,
        email:use.target.elements.email.value,
        message:use.target.elements.message.value
    };
// mit fetch kald
    fetch("https://smuknu.webmcdm.dk/subscribe",{
        method:"POST",
        body:JSON.stringify(post),
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json;charset=UTF-8"
        }
    })
// hertil laver jeg et promise på at jeg kan bruge json filen, fra apien.
    .then((use=>use.json()
    ))

// nu bruger vi informationen hentet direkte fra api kaldet. Hvis det er sandt at name ikke er defineret, 
// altså at brugeren er ny så SKAL navnet brugeren har skrevet vises i popup vinduet. 
// Men hvis navnet/brugeren allerede findes så skal fejl beskeden herunder vises på skærmen.
    .then((use=>{
        undefined!==use.result.name?ny.innerHTML=use.result.name:(
        ny.innerHTML="Denne e-mail findes allerede, eller dine oplysninger er forkerte!",
        ny.classList.add("besked"),
        head.innerHTML="Beklager ☻",
        remove.forEach((use=>{
            use.classList.add("remove-me")
        }
        )
    )
),    

// min valid box der skal vises
        validation.style.display="flex"
        }
    ))

}

// min section der kalder min form og reagere med addeventlistener på knappen.
    medlem=document.querySelector(".medlem-box");
    medlem.addEventListener("submit",onSubmit);


//  min function der reagere når man klikker på min knap i valid til at
//  prøve igen.
function retry(){
     document.querySelector("#valid").style.display="none"
}       
// Medlem End


// Scrollto function Start
// Her fortæller jeg at den skal gemme hvorhenne jeg er på siden.
document.addEventListener("DOMContentLoaded",(
    function(){
    const stay = localStorage.getItem("scroll");
    stay && window.scrollTo(0,stay)
}
)),
// her fortæller jeg at den skal scroll til det specifikke sted på siden den har gemt via Y aksen.
window.onbeforeunload = function()
{
    localStorage.setItem("scroll",window.scrollY)
};
// Scrollto function End
