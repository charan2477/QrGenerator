let container=document.querySelector(".container");
let qrinput=document.querySelector("#text");
let generateBtn=document.querySelector("#generate");
let img=document.querySelector("#qr-img");

let preInput

generateBtn.onclick=function(){
    let input=qrinput.value.trim()
    if(!input || input==preInput){
        alert("Please enter a new text");
        return;
    }
    else{
        preInput=input;
        generateBtn.innerText="Generate QR code......... ";
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        img.onload=function(){
            container.classList.add('active')
            generateBtn.innerText="Generate QR code";
        }




    }
}