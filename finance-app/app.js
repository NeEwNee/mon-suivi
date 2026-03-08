let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI(){

let list = document.getElementById("transactions");
list.innerHTML="";

let balance=0;

transactions.forEach(t=>{

let li=document.createElement("li");
li.textContent=t.desc+" : "+t.amount+"€";

list.appendChild(li);

balance+=Number(t.amount);

});

document.getElementById("balance").textContent=balance+" €";

localStorage.setItem("transactions",JSON.stringify(transactions));

}

function addTransaction(){

let desc=document.getElementById("desc").value;
let amount=document.getElementById("amount").value;

transactions.push({desc,amount});

updateUI();

}

updateUI();