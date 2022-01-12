const learners =["Ahmad", "Jian", "Dante", "Muhammet", "Nicolas", "Beryl", "Cynthia", "Ruben", "Magali", "Jawid", "Koen","Kevin", "Benjamin", "Collin", "Michael", "Ellen", "Michelle", "Dery", "Jordy", "Pieter","Sarah"];
const article = document.createElement("article");
document.body.appendChild(article);

for (let i = 0; i < learners.length; i++) {
    const learner = learners[i];
    const section = document.createElement("section");
    document.body.appendChild(section);
    section.innerHTML = learner;
    article.append(section);
    section.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}
