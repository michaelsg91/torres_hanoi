var cuerpo;

var cuadro1=new cuadro();
var cuadro2=new cuadro();
var cuadro3=new cuadro();

function crear_div(){
  var caja=document.createElement("div");
  return caja;
}

function cuadro(){
  this.caja=crear_div();
  this.caja.style.width="28%";
  this.caja.style.height="200px";
  this.caja.style.marginLeft="4%";
  this.caja.style.borderWidth="2%";
  this.caja.style.border="solid black";
  this.caja.style.float="left";
}

function iniciar(){
  cuerpo=document.getElementsByTagName("body")[0];
  cuerpo.appendChild(cuadro1.caja);
  cuerpo.appendChild(cuadro2.caja);
  cuerpo.appendChild(cuadro3.caja);
}

window.addEventListener("load",iniciar,false);
