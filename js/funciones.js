$(document).ready(function(){
//--////--------EJERCICIO 1 ---------------------------------//
    $("#btnSalario").click(function(){
        var tarifa = $("#tarifa").val();
        var horas = $("#horas").val();
        if(horas>40){
            var salario = 40*tarifa;
            $("#salario").val(salario);
            $("#horasextra").val(horas-40);
            $("#total").val(salario+((horas-40)*2*tarifa));
        }else{

            $("#salario").val(tarifa*horas);
            $("#horasextra").val(0);
            $("#total").val(tarifa*horas);
        }

    });
    $("#limpiarSalario").click(function(){
        $("#salario").val(null);
        $("#horasextra").val(null);
        $("#total").val(null);
        $("#tarifa").val(null);
        $("#horas").val(null);
        $("#horas").focus();
    });

//--////--------EJERCICIO 2 ---------------------------------//
    $("#btntablas").click(function(){
        var num = $("#num").val();
        var i = 1;
        var j = 1;
        cadena = "";
        while (i <= num) {
          while (j <= 12) {
            cadena = cadena + i + " X " + j + " = " + i * j + "\n";
            j++;
          }
          cadena=cadena+"\n";
          j = 1;
          i = i + 1;
        }
        $("#resultado").val(cadena);
    });
    $("#btnlimpiartablas").click(function(){
        $("#num").val(null);
        $("#resultado").val(null);
        $("#num").focus();
    });

//--////--------EJERCICIO 3 ---------------------------------//


    $("#btnCalcular").click(function(){
        var total=$("#precio1").val()*$("#cantidad1").val()+$("#precio2").val()*$("#cantidad2").val()+$("#precio3").val()*$("#cantidad3").val()+$("#precio4").val()*$("#cantidad4").val();
        
    if(total>250){
        $("#importe").val(total);
        $("#descuento").val(total*0.05);
        $("#totalpagar").val(total*0.95);

    }else{
        $("#importe").val(total);
        $("#descuento").val(0);
        $("#totalpagar").val(total);
    }
    });
    $("#btnlimpiar").click(function(){
        $("#cantidad1").val(null);
        $("#cantidad2").val(null);
        $("#cantidad3").val(null);
        $("#cantidad4").val(null);
        $("#importe").val(null);
        $("#descuento").val(null);
        $("#totalpagar").val(null);
        $("#cantidad1").focus();
    });

});