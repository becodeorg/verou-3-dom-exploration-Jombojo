/*get all learners
create a section with paragraph
create article
generate random background color
for loop that appends section to article*/

const learners = ["Ahmad", "Jian", "Dante", "Muhammet", "Nicolas", "Beryl", "Cynthia", "Ruben", "Magali", "Jawid", "Koen", "Kevin", "Benjamin", "Collin", "Michael", "Ellen", "Michelle", "Dery", "Jordy", "Pieter", "Sarah"];
const article = document.createElement("article");

document.body.appendChild(article);
// Modify the script.js to create a new <section> with a random background-color for each learner in your group. 
// This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
var r, g, b, hsp;
for (let i = 0; i < learners.length; i++) {
    const learner = learners[i];
    const section = document.createElement("section");
    document.body.appendChild(section);
    section.innerHTML = learner;
    article.append(section);
    var kleurTemp = Math.floor(Math.random() * 16777215).toString(16);
    section.style.backgroundColor = "#" + kleurTemp;
    // If the background is dark the text should be white, if the background is light the text should be black

    // If hex --> Convert it to RGB: http://gist.github.com/983661
    kleurTemp = +("0x" + kleurTemp.slice(1).replace(
        kleurTemp.length < 5 && /./g, '$&$&'));
    console.log(kleurTemp);
    r = kleurTemp >> 16;
    g = kleurTemp >> 8 & 255;
    b = kleurTemp & 255;



    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    console.log(hsp);
    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        section.style.color= "black";
    } else {

        section.style.color= "white";
    }
}


