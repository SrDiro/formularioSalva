/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comprar() {
    var precio = 0;

    var checkboxes = document.forms[0];
    var res;
    var pre;
    var ivaParse = 0;
    
    for (var x = 0; x < checkboxes.length; x++) {
        
        if (checkboxes[x].checked) {
            
            if (checkboxes[x].id !== "cb_iva") {
                
                res = checkboxes[x].name.split(" ");
                pre = res[(res.length - 1)];
                precio += parseFloat(pre);                
                                
            } else if (checkboxes[x].id === "cb_iva"){
                res = checkboxes[x].name.split(" ");
                pre = res[(res.length - 1)];
                ivaParse = parseFloat(pre);                
                precio = precio + (precio * (ivaParse/100));
                
            }                                
        }
    }
    
    precio = (Math.round(precio * 100) / 100).toFixed(2);
    document.getElementById("p_total").innerHTML = "TOTAL: " + precio + "€";
    
}

function inImage(src){
    document.getElementById("bigImage").style.backgroundImage = "url('" + src + "')";
}

function outImage(){
    document.getElementById("bigImage").style.backgroundImage = "url('')";
}