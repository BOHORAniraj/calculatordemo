

const buttons = document.querySelectorAll("button");
// console.log(buttons);
let texttodisplay = ""
buttons.forEach(btn=> {
    btn.addEventListener("click", e=> {
       const val = btn.innerText;
       if (val === "="){
           
           return Ontotal();

       }
       if (val === "AC"){
           return reset();
       }
       if (val === "C"){
           texttodisplay = texttodisplay.slice(0,-1);
           return display(texttodisplay);
       }
       if(val=== "OFF"){
           texttodisplay=""
           display(texttodisplay);
           document.getElementById("result").style.background ="black";
       btn.innerText="ON";
       return
        }
       if(val=== "ON"){
           texttodisplay=""
           display(texttodisplay);
           document.getElementById("result").style.background ="white";
       btn.innerText="OFF";
       return
        }


       texttodisplay=texttodisplay + val;

       display(texttodisplay)

    });
});

// display area
const display = niraj => {
    if(niraj.lenght < 1){
        niraj="0.00";
    }
    document.getElementById("result").innerText = niraj
};


const Ontotal = () => {
    const total = eval(texttodisplay) + randomval() ;
    texttodisplay = "";
        display(total);

} 
const reset= () => {
    document.getElementById("result").innerText= "0.00";
    
    texttodisplay="";
};

const randomval = () => {
    const random = Math.floor(Math.random()*10);
    console.log(random);
    return random < 3 ? random : 0;

};