var purPrice = document.querySelector("#initial-input");
var stockQuantity = document.querySelector("#quantity-input");
var sellPrice = document.querySelector("#current-input");
var result = document.querySelector("#result");
var btn = document.querySelector("#btn");


btn.addEventListener("click", function check() {

    if(purPrice.value === "" || stockQuantity.value === "" || sellPrice.value === "")
    {
        result.innerText= "Kindly ensure to fill all the field values";
    }

    else
    {
        var initial = Number(purPrice.value);
        var quantity = Number(stockQuantity.value);
        var current = Number(sellPrice.value);
        result.innerText = calcProfLoss(initial, quantity, current);
    }

    
})

function calcProfLoss(ini, qua, cur) 
{
    if (ini > cur) 
    {
        var loss = (ini - cur) * qua;
        var loss_percentage = (loss / (ini * qua)) * 100;
        result.style.color = "#EF4444";
        var res = "Your total Loss is " + loss + " Loss Percentage is " + loss_percentage.toFixed(2) + "%";
        return res;
    } 
    else if (cur > ini) 
    {
        var gain = (cur - ini) * qua;
        var gain_percentage = (gain / (ini * qua)) * 100;
        result.style.color = "#10B981";
        var ret = "Your total Gain is " + gain + " Gain Percentage is " + gain_percentage.toFixed(2) + "%";
        return ret;
    } 
    else 
    {
        result.style.color = 'orange'
        var ret = "You are neither at profit nor at loss";
        return ret;
    }
}