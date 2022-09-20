var poder = parseInt($("#poder").text());
var banco = parseInt($("#banco").text());
var idle = parseInt($("#idle").text());


var trabalhador = $(".trabalhador").text();
var valorTrabalhador = $(".valor-trabalhador").text();


$(document).ready(function(){
    cliqueTap();
    comprarFerramenta();
    comprarTrabalhador();
    contadorTrabalhador();
});


function cliqueTap(){
    $("#btn-click").click(function(){
        var poder = parseInt($("#poder").text());
    
        banco += poder;
    
        $("#banco").text(banco);
    });    
}

function comprarFerramenta(){
    $("#btn-comprarFerramenta").click(function(){

        var ferramentas = parseInt($(".ferramentas").text());
        var valorFerramenta = parseFloat($(".valor-ferramenta").text());    
        
        if (banco >= valorFerramenta){
            
            var updateFerramenta = parseInt($(".ferramentas").text());
            
            banco -= valorFerramenta;
            $("#banco").text(banco);

            ferramentas++
            $(".ferramentas").text(ferramentas);
    
            valorFerramenta = valorFerramenta * 1.1;
            $(".valor-ferramenta").text(valorFerramenta);
            
            
            $("#poder").text(poder + updateFerramenta);
            
        } else {
            console.log("valor insuficiente");
        }
    
        console.log(banco);
    
    });
}

function comprarTrabalhador(){
    $("#btn-comprarTrabalhador").click(function(){

        var trabalhador = parseInt($(".trabalhador").text());
        var valorTrabalhador = parseFloat($(".valor-trabalhador").text());    
        
        if (banco >= valorTrabalhador){
            
            var updateTrabalhador = parseInt($(".trabalhador").text());
            
            banco -= valorTrabalhador;
            $("#banco").text(banco);

            trabalhador++
            $(".trabalhador").text(trabalhador);
    
            valorTrabalhador = valorTrabalhador * 1.1;
            $(".valor-trabalhador").text(valorTrabalhador);
            
            
            $("#idle").text(idle + updateTrabalhador);
            
        } else {
            console.log("valor insuficiente");
        }
    
        console.log(banco);
    
    });
}

function contadorTrabalhador(){
    setInterval(() => {
        banco += idle;
    
        $("#banco").text(banco);
    }, 1000);
}