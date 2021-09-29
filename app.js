var purPrice = document.querySelector("#initial-input");
var stockQuantity = document.querySelector("#quantity-input");
var sellPrice = document.querySelector("#current-input");
var result = document.querySelector("#result");
var btn = document.querySelector("#btn");


btn.addEventListener("click", function check() {

    if(purPrice.value === "" || stockQuantity.value === "" || sellPrice.value === "")
    {
        result.style.color = 'yellow';
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
        var lossPercentage = (loss / (ini * qua)) * 100;
        result.style.color = 'red';
        var res = "UH,OH! You lost " + loss + " \n Loss Percentage is " + lossPercentage.toFixed(2) + "%";
        return res;
    } 
    else if (cur > ini) 
    {
        var gain = (cur - ini) * qua;
        var gainPercentage = (gain / (ini * qua)) * 100;
        result.style.color = 'green';
        var res = "You have gained " + gain + " \n Gain Percentage is " + gainPercentage.toFixed(2) + "%";
        return res;
    } 
    else 
    {
        result.style.color = 'orange'
        var res = "You are neither at profit nor at loss";
        return res;
    }
}