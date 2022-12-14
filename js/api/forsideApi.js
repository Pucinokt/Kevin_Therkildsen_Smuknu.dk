// Fremhævede produkter Start

Promise.all([fetch("https://smuknu.webmcdm.dk/products",

{headers:
    {Accept:"application/json"
}
})

// her har jeg lavet et for loop, hvor jeg har valgt at bruge ternary(?) og conditional(:) operator
// for at tjekke om strengen er tom "". Hvis den er tom "" så fortæller jeg at den skal være tom igen "". 
// Men ellers så skal der være en værdi af "discountInPercent" fra API'en i <p>Spar %</p>. <----- Dette sker EFTER conditional (:)

// i forhold til recommended har jeg sagt den skal starte fra "0" og loop igennem hele for-løkken. 
// Jeg har valgt at bruge ".length" i stedet for at definere et tal fordi det er mere dynamisk.
.then(function(FP){
    return FP.json()
    })
    .then(function(FP){
        let F="";
        for(let j=0; j < FP.length; j++)
        !0==FP[j].recommended && (F+=
            `<div class='Products'>
                <img class='Products-image' src='${FP[j].image}'>${""==FP[j].discountInPercent?"": /* <---- 
                Jeg tjekker om strengen fra id'et discountInPercent er tomt.
                //  Hvis dette er TRUE så SKAL strengen være tom "". 
                Efter den tomme streng kommer vores conditional operator, 
                der siger at hvis værdien er FALSE skal tallet fra discountInPercent i REST API'en printes ud i browseren */
            `<div class='Product-Discount'><h1>Spar</h1><p>${FP[j].discountInPercent}%</p></div>`}

             <div class='Products-details'>
                <h3 class='Products-title'>${FP[j].title}</h3>
                <p class='Products-text'>${FP[j].price},00 kr.</p>
            </div>
            </div>`);
          document.querySelector("#product-list").innerHTML=F
        }
        ),
    ]);
// Fremhævede produkter End

