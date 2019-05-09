"use strict";
/*
Contains code base for shopping cart table

Commented img as it doesn't look well in cart

Vanesa Nasi 
04/10/2019 
*/

var subtotal = 0;
var cartHTML = "<table><thead> \
                <tr><th>Item Description</th><th>Price</th><th>Qty</th><th>Total</th></tr> \
                </thead><tbody>";
var cost = 0;
var i;
for (i = 0; i < item.length; i++) {
    cartHTML += '<tr><td>' /*+ img[i]*/ + '<tr><td>' + item[i] + '</td><td>' + "$" + price[i] + '</td><td>' + quantity[i] + '</td>';
    
    cost = price[i] * quantity[i];
    cartHTML += '<td>$' + cost + '</td></tr>';
    subtotal += cost;
};

cost = subtotal;

var shipCost = Math.round(cost * .05).toFixed(2);

var orderTotal = parseFloat(cost) + parseFloat(shipCost);



cartHTML += "</tbody> \
<tfoot><tr><td colspan='3'>Subtotal</td><td>$" + subtotal + "</td></tr> \
<tr><td colspan='3'>Shipping*</td><td>$" + shipCost + "</td></tr> \
<tr><td colspan='3'>Total</td><td>$" + orderTotal + "</td></tr> \
</tfoot> \
</table>";

document.getElementById("cart").innerHTML = cartHTML;

var now = new Date();
var shipDays = now;
shipDays.setDate(shipDays.getDate() + 5);

document.getElementById("sdate").innerHTML = "* Orders placed today will be shipped by " + shipDays;
function newFunction() {
    return parseFloat(subtotal) + parseFloat(shipCost);
}

