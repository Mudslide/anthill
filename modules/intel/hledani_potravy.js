(function(){

/*FIXME*/World.zoom(.25);

var x       = parseInt(doc.currentScript.getAttr("data-x"));
var y       = parseInt(doc.currentScript.getAttr("data-y"));
var steps   = parseInt(doc.currentScript.getAttr("data-steps"));
win.time = parseInt(doc.currentScript.getAttr("data-time"));
win.sn   = 0; //Number of steps
win.dir  = 0;
win.prev = [];

if(isNaN(time)){time=1000;}
if(isNaN(steps)){steps=-1;}
if(!name){name="ant";}

var style = doc.mkNode("link");
style.setAttr("rel","stylesheet");
style.setAttr("href","./modules/intel/hledani_potravy.css");
doc.head.addChild(style);

var ant = new SingleCellNode(name);
win.ant=ant;
console.log(ant.xy.place(x,y));

var gauss_dir = function(base,offset){
 if(offset==undefined){offset=0;}
 var n = -base/2;
 var i = 0;
 while(i++<base){
  n+=Math.random();
 }
 return Math.round(n+offset)%6+0;
}

var f = function(){
 sn++;
 
 dir = gauss_dir(16);
 while( prev.equals(ant.cell.dir(dir).xy()) ){
  dir = gauss_dir(16);
 }
 
 prev = ant.cell.xy();
 ant.dir(dir);
 
 if(sn!=steps){ //Pokud nebyl proveden zadaný počet kroků
  setTimeout(f,time); //Spustí funkci znovu za daný čas
 }
}

setTimeout(f,time); //Spustí funkci za daný čas

})();
