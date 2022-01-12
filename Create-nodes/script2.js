const names =["Ahmad", "Jian", "Dante", "Muhammet", "Nicolas", "Beryl", "Cynthia", "Ruben", "Magali", "Jawid", "Koen","Kevin", "Benjamin", "Collin", "Michael", "Ellen", "Michelle", "Dery", "Jordy", "Pieter","Sarah"];

function addSection(name){
    const newSec = document.createElement("section");
    newSec.style.backgroundColor = "red";
    const art = document.querySelector("article");
    art.appendChild(newSec);
    const heading = document.createElement("p");
    newSec.appendChild(heading);
    const txt1 = document.createTextNode(name);
    heading.appendChild(txt1);
}

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    addSection(name);
}

names.forEach((name) => addSection(name));
names.forEach((name))