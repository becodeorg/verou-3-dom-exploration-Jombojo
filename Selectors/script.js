//Add a title attribute to every element that has the important class, stating This is an important item
var x = document.querySelectorAll(".important");
var i;
for (i = 0; i < x.length; i++) {
  x[i].title = "This is an important item";
}
//Select all the img tags and loop through them. If they have no important class, turn their display property to none
var x2 = document.querySelectorAll(img);
for (i = 0; i < x2.length; i++) {
    if (x2[i].title=='important') {
        
    } else {
        element.classList.add("hidden");
    } ;
    
}
//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well