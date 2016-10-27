var cuerpo;
const altura="40px";

var cuadro1=new cuadro(true);
var cuadro2=new cuadro(false);
var cuadro3=new cuadro(false);

var ficha_seleccionada;
var origen;
var destino;

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
    sel_ori_des(cuadro);
  }else{
    cuadro.caja.style.borderColor="black";
    reiniciar_orides();
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
  this.valor=0;
}
function ficha_m(){
  this.caja=crear_div();
  this.caja.style.width="30%";
  this.caja.style.height=altura;
  this.caja.style.backgroundColor="#979797";
  this.caja.style.marginLeft="auto";
  this.caja.style.marginRight="auto";
  this.valor=1;
}
function ficha_l(){
  this.caja=crear_div();
  this.caja.style.width="50%";
  this.caja.style.height=altura;
  this.caja.style.backgroundColor="#666666";
  this.caja.style.marginLeft="auto";
  this.caja.style.marginRight="auto";
  this.valor=2;
}
function ficha_xl(){
  this.caja=crear_div();
  this.caja.style.width="70%";
  this.caja.style.height=altura;
  this.caja.style.backgroundColor="#000000";
  this.caja.style.marginLeft="auto";
  this.caja.style.marginRight="auto";
  this.valor=3;
}
//---- espacio vacio del cuadro --------
function relleno(){
  this.caja=crear_div();
  this.caja.style.width="100%";
  this.caja.style.height=altura;
}
//---- contructor - función que crea los cuadros -------------------------------
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
    //-- saber si el cuadro está vacio ---
  this.tiene_fichas=function(){
    var rellenos=0;
    for(var i=0;i<this.contenido.length;i++){
      if(this.contenido[i] instanceof relleno){
        rellenos++;
      }
    }

    if(rellenos==this.contenido.length){
      return false;
    }else{
      return true;
      }
    };
    //--- Obtener la ficha de encima -------
    this.obtener_ficha_sup=function(){
      for(var i=0;i<this.contenido.length;i++){
        if(!(this.contenido[i] instanceof relleno)){
            return this.contenido[i];
        }
      }
    };

    //--- Quitar ficha de encima ---------
    this.quitar_ficha_sup=function(){
      for(var i=0;i<this.contenido.length;i++){
          if(!(this.contenido[i] instanceof relleno)){
            ficha_seleccionada=this.contenido[i];
            this.contenido[i]=new relleno();
            break;
          }
      }
    };

    //--- Insertar ficha superior en otro cuadro -----
    this.insertar_ficha_sup=function(){
      for(var i=this.contenido.length - 1;i>=0;i--){
        if(this.contenido[i] instanceof relleno){
          this.contenido[i]=ficha_seleccionada;
          break;
        }
      }
    };

    //---- Redibujar cajas --------
    this.redibujar_cajas=function(){
      while(this.caja.hasChildNodes()){
        this.caja.removeChild(this.caja.lastChild);
      }
      for(var i=0;i<this.contenido.length;i++){
        this.caja.appendChild(this.contenido[i].caja);
      }
    };

}
//------------- función para mover las fichas ----------------------
function sel_ori_des(cuadro){
  if(origen==undefined){
    if(cuadro.tiene_fichas()){
      cuadro.caja.style.borderColor="red";
      origen=cuadro;
      origen.elegido=true;
    }
  }else if(origen!=undefined && destino==undefined){
    destino=cuadro;
    destino.elegido=true;

  if(origen!=destino){
    if(!destino.tiene_fichas() || (origen.obtener_ficha_sup().valor < destino.obtener_ficha_sup().valor)){
        origen.quitar_ficha_sup();
        origen.redibujar_cajas();
        destino.insertar_ficha_sup();
        destino.redibujar_cajas();
    }
  }
}
  if(destino!=undefined && origen!=undefined){
    reiniciar_orides();
  }
}

//---- reinicia el origen y el destino -----------------------------------
function reiniciar_orides(){
  if(origen!=undefined){
    origen.caja.style.borderColor="black";
    origen.elegido=false;
  }
  if(destino!=undefined){
    destino.caja.style.borderColor="black";
    destino.elegido=false;
  }
  origen=undefined;
  destino=undefined;

  cuadro1.elegido=false;
  cuadro2.elegido=false;
  cuadro3.elegido=false;
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
