var cuerpo;
const altura="40px";

var cuadro1=new cuadro(true);
var cuadro2=new cuadro(false);
var cuadro3=new cuadro(false);

function crear_div(){
  var caja=document.createElement("div");
  return caja;
}
//----  funcion para pintar el cuadro mientras el mouse esta sobre él -----
function over1(){
  over(cuadro1);
}
function over2(){
  over(cuadro2);
}
function over3(){
  over(cuadro3);
}

function over(cuadro){
  cuadro.caja.style.backgroundColor="#ADFAFF";
}
//----  funcion para pintar el cuadro mientras el mouse esta fuera de él -----
function out1(){
  out(cuadro1);
}
function out2(){
  out(cuadro2);
}
function out3(){
  out(cuadro3);
}

function out(cuadro){
  cuadro.caja.style.backgroundColor="white";
}

//----  funcion para pintar el borde mientras el mouse hace clic en él -----
function clic1(){
  cuadro1.elegido=!cuadro1.elegido;
  clic(cuadro1);
}
function clic2(){
  cuadro2.elegido=!cuadro2.elegido;
  clic(cuadro2);
}
function clic3(){
  cuadro3.elegido=!cuadro3.elegido;
  clic(cuadro3);
}

function clic(cuadro){
  if(cuadro.elegido){
    cuadro.caja.style.borderColor="red";
  }else{
    cuadro.caja.style.borderColor="black";
  }
}

//---- funcion para rellenar los cuadros con 5 espacios -------------
function rellenar_contenido(){
  var contenido=new Array();
  for(var i=0;i<5;i++){
    contenido[i]=new relleno();
  }
  return contenido;
}
//---- función para pintar las fichas en el cuadro --------------
function rellenar_fichas(){
  var contenido=new Array();

  contenido[0]=new relleno();
  contenido[1]=new ficha_s();
  contenido[2]=new ficha_m();
  contenido[3]=new ficha_l();
  contenido[4]=new ficha_xl();

  return contenido;
}
//---- funciones que crean las fichas ---------------------------
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
//---- función para darle la anchura y altura de cada ficha en el cuadro --------
function relleno(){
  this.caja=crear_div();
  this.caja.style.width="100%";
  this.caja.style.height=altura;
}
//---- función que crea los tres cuadros -----------------------------------
function cuadro(caja_inicial){
  this.caja=crear_div();
  this.caja.style.width="28%";
  this.caja.style.height="200px";
  this.caja.style.marginLeft="4%";
  this.caja.style.borderWidth="2px";
  this.caja.style.border="solid black";
  this.caja.style.float="left";
  this.contenido;
  this.elegido=false;

  if(caja_inicial){
    this.contenido=rellenar_fichas();
  }else{
    this.contenido=rellenar_contenido();
  }

  for(var i=0;i<this.contenido.length;i++){
    this.caja.appendChild(this.contenido[i].caja);
  }
}
//---- función principal ----------------------------------------------
function iniciar(){
  cuerpo=document.getElementsByTagName("body")[0];
  cuerpo.appendChild(cuadro1.caja);
  cuerpo.appendChild(cuadro2.caja);
  cuerpo.appendChild(cuadro3.caja);

  cuadro1.caja.addEventListener("mouseover",over1,false);
  cuadro2.caja.addEventListener("mouseover",over2,false);
  cuadro3.caja.addEventListener("mouseover",over3,false);

  cuadro1.caja.addEventListener("mouseout",out1,false);
  cuadro2.caja.addEventListener("mouseout",out2,false);
  cuadro3.caja.addEventListener("mouseout",out3,false);

  cuadro1.caja.addEventListener("click",clic1,false);
  cuadro2.caja.addEventListener("click",clic2,false);
  cuadro3.caja.addEventListener("click",clic3,false);
}
//----- evento que se carga al abrir la aplicación en el explorador --------
window.addEventListener("load",iniciar,false);
