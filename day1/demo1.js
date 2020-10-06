document.write('welcome to javascript');

function hello(){

   /*  var x = 10;
    var y = 20;
    var z = x +y;
    alert('welcome ' +z)*/

    //var a= Number(prompt('enter first value'));
    //var b= Number(prompt('enter second value'));
    var a = Number(document.getElementById("fvalue").value);
    var b = Number(document.getElementById("svalue").value);

    var d = Number(document.getElementById("ffvalue").value);
    var e = Number(document.getElementById("ssvalue").value);
    //alert(a);
    var c = a*b;
    var f = d/e;
    document.getElementById("show").innerHTML =c;
    document.getElementById("show1").innerHTML =f;
   //console.log('welcome  ' +c) 
   //console.log('welcome  ' +f) 

   

}