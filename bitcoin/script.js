$(function(){
    let tempBuy = 0;
    let tempSell = 0;
    let actualBuy = 0;
    let actualSell = 0;


    $.getJSON('https://blockchain.info/pl/ticker',function(data){
        tempBuy = data['PLN'].buy;
        tempSell = data['PLN'].sell;
        $("#kupno").text(tempBuy);
        $("#sprzedaz").text(tempSell);
        })
        
    
        $("button").click(function(){
            $.getJSON('https://blockchain.info/pl/ticker',function(data){
            actualBuy = data['PLN'].buy;
            actualSell = data['PLN'].sell;
            $("#kupno").text(actualBuy);
            $("#sprzedaz").text(actualSell);
            if(actualBuy > tempBuy)
            {
                $("#upBuy").show();
                $("#downByu").hide();
                $("#minusBuy").hide();
            }
            else if (actualBuy < tempBuy)
            {
                $("#downBuy").show();
                $("#upBuy").hide();
                $("#minusBuy").hide();
            }
            else{
                $("#minusBuy").show();
                $("#upBuy").hide();
                $("#downBuy").hide();
            }

            if(actualSell > tempSell)
            {
                $("#upSell").show();
                $("#downSell").hide();
                $("#minusSell").hide();
            }
            else if (actualSell < tempSell)
            {
                $("#downSell").show();
                $("#upSell").hide();
                $("#minusSell").hide();
            }
            else{
                $("#minusSell").show();
                $("#upSell").hide();
                $("#downSell").hide();
            }
            tempSell = actualSell;
            tempBuy = actualBuy;
        })
     
    })
})