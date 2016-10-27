var cuerpo;
const altura="40px";

var cuadro1=new cuadro(true);
var cuadro2=new cuadro(false);
var cuadro3=new cuadro(false);

function crear_div(){
  var caja=document.createElement("div");
  return caja;
}

function rellenar_contenido(){
  var contenido=new Array();
  for(var i=0;i<5;i++){
    contenido[i]=new relleno();
  }
  return contenido;
}

function rellenar_fichas(){
  var contenido=new Array();

  contenido[0]=new relleno();
  contenido[1]=new ficha_s();
  contenido[2]=new ficha_m();
  contenido[3]=new ficha_l();
  contenido[4]=new ficha_xl();

  return contenido;
}

function ficha_s(){
  this.caja=crear_div();
  this.caja.style.width="10%";
  this.caja.style.height=altura;
  this.caja.style.backgroundColor="#0088cc";
  this.caja.style.marginLeft="auto";
  this.caja.style.marginRight="auto";
}
function ficha_m(){
  this.caja=crear_div();
  this.caja.style.width="30%";
  this.caja.style.height=altura;
  this.caja.style.backgroundColor="#979797";
  this.caja.style.marginLeft="auto";
  this.caja.style.marginRight="auto";
}
function ficha_l(){
  this.caja=crear_div();
  this.caja.style.width="50%";
  this.caja.style.height=altura;
  this.caja.style.backgroundColor="#666666";
  this.caja.style.marginLeft="auto";
  this.caja.style.marginRight="auto";
}
function ficha_xl(){
  this.caja=crear_div();
  this.caja.style.width="70%";
  this.caja.style.height=altura;
  this.caja.style.backgroundColor="#000000";
  this.caja.style.marginLeft="auto";
  this.caja.style.marginRight="auto";
}

function relleno(){
  this.caja=crear_div();
  this.caja.style.width="100%";
  this.caja.style.height=altura;
}

function cuadro(caja_inicial){
  this.caja=crear_div();
  this.caja.style.width="28%";
  this.caja.style.height="200px";
  this.caja.style.marginLeft="4%";
  this.caja.style.borderWidth="2%";
  this.caja.style.border="solid black";
  this.caja.style.float="left";
  this.contenido;

  if(caja_inicial){
    this.contenido=rellenar_fichas();
  }else{
    this.contenido=rellenar_contenido();
  }

  for(var i=0;i<this.contenido.length;i++){
    this.caja.appendChild(this.contenido[i].caja);
  }
}

function iniciar(){
  cuerpo=document.getElementsByTagName("body")[0];
  cuerpo.appendChild(cuadro1.caja);
  cuerpo.appendChild(cuadro2.caja);
  cuerpo.appendChild(cuadro3.caja);
}

window.addEventListener("load",iniciar,false);
