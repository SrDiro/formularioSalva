/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comprar() {
    var precio = 0;

    var checkboxes = document.forms[0];
    
    for (var x = 0; x < checkboxes.length; x++) {
        if (checkboxes[x].checked) {
            var res = checkboxes[x].name.split(" ");
            var pre = res[(res.length - 1)];
        precio += parseFloat(pre);
        }
    }

    document.getElementById("p_total").innerHTML = "TOTAL: " + precio + "€";
}
