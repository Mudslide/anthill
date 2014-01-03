(function(){

var x       = parseInt(doc.currentScript.getAttr("data-x"));
var y       = parseInt(doc.currentScript.getAttr("data-y"));
var steps   = parseInt(doc.currentScript.getAttr("data-steps"));
window.time = parseInt(doc.currentScript.getAttr("data-time"));
window.sn   = 0; //Number of steps

if(isNaN(time)){time=1000;}
if(isNaN(steps)){steps=-1;}
if(name==undefined){name="m1";}

var ant = new SingleCellNode(name);


var f = function(){
 sn++;
 
 /* TODO */
 
 if(sn!=steps){ //Pokud nebyl proveden zadaný počet kroků
  setTimeout(f,time); //Spustí funkci znovu za daný čas
 }
}

setTimeout(f,time); //Spustí funkci za daný čas

})();
