let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let goal = localStorage.getItem("goal") || 0;

function updateUI(){

let balance=0;
let income=0;
let expense=0;

let list=document.getElementById("transactions");
list.innerHTML="";

transactions.forEach(t=>{

let li=document.createElement("li");

li.textContent=t.desc+" : "+t.amount+"€";

list.appendChild(li);

if(t.type==="income"){

income+=Number(t.amount);

}else{

expense+=Number(t.amount);

}

balance=income-expense;

});

document.getElementById("balance").textContent=balance+" €";
document.getElementById("income").textContent=income+" €";
document.getElementById("expense").textContent=expense+" €";

document.getElementById("goalDisplay").textContent="Objectif : "+goal+" €";

localStorage.setItem("transactions",JSON.stringify(transactions));

updateChart(income,expense);

}

function addTransaction(){

let desc=document.getElementById("desc").value;
let amount=document.getElementById("amount").value;
let type=document.getElementById("type").value;

transactions.push({desc,amount,type});

updateUI();

}

function setGoal(){

goal=document.getElementById("goalInput").value;

localStorage.setItem("goal",goal);

updateUI();

}

let chart;

function updateChart(income,expense){

let ctx=document.getElementById("chart");

if(chart){

chart.destroy();

}

chart=new Chart(ctx,{

type:"doughnut",

data:{

labels:["Revenus","Dépenses"],

datasets:[{

data:[income,expense]

}]

}

});

}

updateUI();
