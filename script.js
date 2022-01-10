/*
*/
console.log(document.title);
document.title="Modifying the DOM";
console.log(document.title);
document.body.style.backgroundColor= 'rgb(' + 50 + ',' + 50 + ',' + 75 + ')';
var c = document.body.children;
for (var i = 0; i < c.length; i++) {
    console.log( c[i]);
    
}