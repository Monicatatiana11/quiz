var day = 0;
switch (day){
    case 1:
        document.write ("la bomba es una bomba de agua");
        break;
    case 2
    document.write ("la bomba es una bomba de gasolina");
        break;
    
    case 3 
    document.write ("la bomba de agua es una bomba de de hormigon");
         break;
         
    case 4 
    document.write ("la bomba es una bomba de pasta alimenticia");
    break;

    default
    document.write ("no existe un valor valido para tipo de bomba");

    //outpusts " Mi ejercicio" 

}



function obtenerImporteConImpuestos(importeSinImpuesto, tipoDeProducto){
   let tipoDeProducto = prompt("ingrese el tipo de producto");
   let precio_sin = prompt ("ingrese el valor sin iva");

   tipoDeProducto = parseInt (producto)
   precio_sin = parseInt (precio_sin)

   if (tipoDeProducton == 1){
       document.write ("valor con iva " + ((precio_sin * 0.21) + precio_sin) );


   }
   
   else if (tipoDeProducto == 2){
       document.write ("valor con iva" + (precio_sin * 0.10) );
   }

   else if (tipoDeProducto ==  3){
       document.write ("valor con iva" + (precio_sin * 0.5 );
   }

   obtenerImporteConImpuestos();



