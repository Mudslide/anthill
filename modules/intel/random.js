(function(){

var x       = parseInt(doc.currentScript.getAttr("data-x"));
var y       = parseInt(doc.currentScript.getAttr("data-y"));
var angle   = parseInt(doc.currentScript.getAttr("data-start-angle"));
var steps   = parseInt(doc.currentScript.getAttr("data-steps"));
var angle1  = parseInt(doc.currentScript.getAttr("data-a1"));
var angle2  = parseInt(doc.currentScript.getAttr("data-a2"));
window.time = parseInt(doc.currentScript.getAttr("data-time"));

var style = doc.mkNode("link");
style.setAttr("rel","stylesheet");
style.setAttr("href","./modules/intel/langton.css");
doc.head.addChild(style);

//Vytvoří nové CellNodes
var blk = new CellNode("black");
var ant = new CellNode("blurbsky-vesmirny-kriznik");

var tmp, i=0;

ant.xy.place(x,y); //Umístí mravence na výchozí souřadnice

var f = function(){
 //Pokud existuje buňka v daném směru
 console.log(angle, tmp=ant.cells[0].dir(angle));
 if(tmp){
  tmp=tmp.xy(); //Získej souřadnice dané buňky
  ant.remove(); //Odstraň mravence ze současné pozice
  ant.xy.place(tmp[0],tmp[1]); //Přidej mravence na nové souřadnice
  
  if(blk.cells.indexOf(World.xy(x,y))+1){
   //Pokud je na černé, odeber černou
   blk.remove(x,y);
  }else{
   //Pokud ne, přidej černou
   blk.xy.place(x,y);
  }
  
  try{[x,y] = tmp;}
  catch(e){x = tmp[0]; y = tmp[1];} //ECMA sucks
  
  if(blk.cells.indexOf(World.xy(x,y))+1){
   //Zatoč na černé
   angle+=100*Math.random();
  }else{
   //Zatoč na bílé
   angle+=100*Math.random();
  }
  setTimeout(f,time); //Spustí funkci znovu za daný čas
 }
 
 angle%=6; //Zabrání zaokrouhlování (integer => float)
}

setTimeout(f,time); //Spustí funkci za daný čas

})();
