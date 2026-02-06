

function add(){
 let first = document.getElementById("first_num").value;
 let last = document.getElementById("last_num").value;
 let ans = Number(first)+Number(last);
    let output = document.getElementById("output-area");

    if(ans < 0){
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="red";
    }else{
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="purple";
    }


}

function subtract(){
    let first = document.getElementById("first_num").value;
    let last = document.getElementById("last_num").value;

    let ans = Number(first)-Number(last);

    let output = document.getElementById("output-area");

    if(ans < 0){
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="red";
    }else{
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="purple";
    }


}
function divide(){
    let first = document.getElementById("first_num").value;
    let last = document.getElementById("last_num").value;
    let ans = Number(first) / Number(last);
    let output = document.getElementById("output-area");

    if(ans < 0){
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="red";
    }else{
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="purple";
    }

}
function multiply(){
    let first = document.getElementById("first_num").value;
    let last = document.getElementById("last_num").value;
    let ans = Number(first) * Number(last);
    let output = document.getElementById("output-area");


    if(ans < 0){
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="red";
    }else{
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="purple";
    }

}

function clearCalc(){

    document.getElementById("first_num").value = "";
    document.getElementById("last_num").value = "";
    document.getElementById("output-area").innerHTML = "";

}

function power(){
    let first = document.getElementById("first_num").value;
    let last = document.getElementById("last_num").value;
    let ans = 1;
    for(let i = 0; i < Number(last); i++){
        ans*=Number(first);
    }


    let output = document.getElementById("output-area");
    if(ans < 0){
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="red";
    }else{
        output.innerHTML =  `<h3>${ans}</h3>`;
        output.style.color ="purple";
    }


}