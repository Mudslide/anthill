(function(){

//Shortands for global variables
window.win = window;
window.doc = win.document;
window.on  = win.addEventListener;

//Debug functions
win.__debug = false;


//Shortand for doc.createElement and doc.createElementNS
doc.mkNode = function(n1,n2,n3){
 if(!n2||typeof n2 != "string"){
  return document.createElement(n1);
 }else{
  return document.createElementNS(n1,n2);
 }
}

doc.query = doc.querySelector;
doc.query.all = function(){return doc.querySelectorAll.apply(doc,arguments);};

//Modify the DOM elements
Element.prototype.rm       = Element.prototype.remove;

Element.prototype.setAttr  = Element.prototype.setAttribute;
Element.prototype.getAttr  = Element.prototype.getAttribute;
Element.prototype.hasAttr  = Element.prototype.hasAttribute;
Element.prototype.addAttr  = function(n){this.setAttr(n,"");};
Element.prototype.rmAttr   = Element.prototype.removeAttribute;

Element.prototype.on       = Element.prototype.addEventListener;
Element.prototype.rmon     = Element.prototype.removeEventListener;

Element.prototype.addChild = Element.prototype.appendChild;
Element.prototype.rmChild  = Element.prototype.removeChild;
Element.prototype.mkChild  = function(ns,tag,attrs){
 //Combination of doc.createElement and node.appendChild
 var n = doc.mkNode(ns,tag,attrs);
 this.addChild(n);
 return n;
};


Element.prototype.hasClass = function(str){
 var attr = this.attr.get('class');
 try{
  attr = attr.split(' ');
  if(attr.indexOf(str)+1){
   return true;
  }
 }catch(e){}
 return false;
};
Element.prototype.addClass = function(str){
 var attr = this.attr.get('class');
 try{
  attr = attr.split(' ');
  if(attr.indexOf(str)+1){
   return str;
  }else{
   attr[attr.length] = str;
   attr = attr.join(' ');
   this.attr.set('class',attr);
   return str;
  }
 }catch(e){
  this.attr.set('class',str);
  return str;
 }
};
Element.prototype.rmClass = function(str){
 var attr = this.attr.get('class');
 try{
  var i;
  attr = attr.split(' ');
  if((i=attr.indexOf(str))+1){
   attr.splice(i,1);
   attr = attr.join(' ');
   this.attr.set('class',attr);
  }
 }catch(e){}
 return str;
};
Element.prototype.setClass = function(str){
 try{
  str = str.join(' ');
 }catch(e){}
 this.attr.set('class',str);
};
Element.prototype.getClass = function(){
 var attr = this.attr.get('class');
 try{
  return attr.split(' ');
 }catch(e){
  return [];
 }
};
Element.prototype.spliceClass = function(){
 var attr = this.getClass();
 var result = attr.splice.apply(attr,arguments);
 this.setClass(attr);
 return result;
}

//Arrays
Array.prototype.equals = function(){
 var i = -1, j = -1;
 while(++j<arguments.length){
  if(!Array.isArray(arguments[j])){
   if(win.__debug){console.log("NaA");}
   return false;
  }
  if(this.length!=arguments[j].length){
   if(win.__debug){console.log("DiffLen");}
   return false;
  }
 }
 while(++i<this.length){
  j = -1;
  while(++j<arguments.length){
   if(Array.isArray(this[i])){
    if(!this[i].equals(arguments[j][i])){
     if(win.__debug){console.log("ChildArrayErr");}
     return false;
    }
   }else{
    if(this[i]!=arguments[j][i]){
     if(win.__debug){console.log("ComparationErr");}
     return false;
    }
   }
  }
 }
 return true;
}

})();
