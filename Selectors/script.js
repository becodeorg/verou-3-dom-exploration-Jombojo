function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;}
//Add a title attribute to every element that has the important class, stating This is an important item
// var x = document.querySelectorAll(".important");
// var i;
// for (i = 0; i < x.length; i++) {
//   x[i].title = "This is an important item";
// }
//Select all the img tags and loop through them. If they have no important class, turn their display property to none
// var fotoLijst = document.querySelectorAll("img");
// console.log(fotoLijst);//test of fotolijst werkt
// for (i = 0; i < fotoLijst.length; i++) {
//     if (fotoLijst[i].classList.contains("important") === false) {
//         fotoLijst[i].style.display = "none";
//     } else {//test of de IF wel werkt
//         console.log("important");
//     } ;
    
// }
//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well
// var pLijst = document.querySelectorAll("p");
// for (i=0;i<pLijst.length;i++){
//     console.log(pLijst[i].innerHTML);
//     if (pLijst[i].querySelectorAll(".class")){
//         console.log(pLijst[i].className);
//     }
// }

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
var pLijst2 = document.querySelectorAll("p");
for (i = 0; i < pLijst2.length; i++) {
    if (pLijst2[i].className) {
        console.log("werkt niet");
    } else {
        pLijst2[i].style.color = generateRandomColor();
    } 
}