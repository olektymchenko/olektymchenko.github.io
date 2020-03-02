let btn = document.getElementById("oblicz").addEventListener("click",function(){
    let elements = document.getElementsByTagName("div");
    for(let i = 3; i<=22;i++)
    {
        let name = document.getElementsByClassName("uczen")[i-2].innerHTML;
        let math = parseFloat(document.getElementsByClassName("matematyka")[i-2].value);
        let polish = parseFloat(document.getElementsByClassName("polski")[i-2].value);
        let biology = parseFloat(document.getElementsByClassName("biologia")[i-2].value);
        let geography = parseFloat(document.getElementsByClassName("geografia")[i-2].value);
        let physic = parseFloat(document.getElementsByClassName("fizyka")[i-2].value);
        let chemistry = parseFloat(document.getElementsByClassName("chemia")[i-2].value);
        let comptScienice = parseFloat(document.getElementsByClassName("informatyka")[i-2].value);
        let dodatkowe = document.getElementsByClassName("zajecia-dodatkowe")[i-2].value;
        let dodatkoweArr = dodatkowe.split(", ");
    
    ////////////////////////////////////////////////////////////////////////
        for(let i =0;i<7;i++)
        {
            if(dodatkoweArr[i] === "matematyka")
            {
                if(math<6)
                {
                    math += 0.5;
                }
            }
            if (dodatkoweArr[i] === "polski")
            {
                if(polish<6)
                {
                 polish += 0.5;
                }
            }
            if (dodatkoweArr[i] === "biologia")
            {
                if(biology<6)
                {
                    biology += 0.5;
                }
            }
            if ( dodatkoweArr[i] === "geografia")
            {
                if(geography<6)
                {
                    geography += 0.5;
                }
            }
            if (dodatkoweArr[i] === "fizyka")
            {
                if(physic<6)
                {
                    physic += 0.5;
                }
            }
            if (dodatkoweArr[i] === "chemia")
            {
                if(chemistry<6)
                {
                    chemistry += 0.5;
                }
            }
            if (dodatkoweArr[i] === "informatyka")
            {
                if(comptScienice<6)
                {
                    comptScienice += 0.5;
                }
            }
        }
            
////////////////////////////////////////////
        let srednia = (math+polish+biology+geography+physic+chemistry+comptScienice)/7;
        let sredniaUcznia = document.getElementsByClassName("srednia")[i-2];
        sredniaUcznia.innerText = srednia.toFixed(2); 
        sredniaUcznia.style.fontWeight = "Bold";
        if(srednia >=4.75)
        {
            let color = document.getElementsByClassName("uczen")[i-2];
            color.style.backgroundColor = "green";
        }
        if((math||polish||biology||geography||physic||chemistry||comptScienice) <= 1)
        {
            let color = document.getElementsByClassName("uczen")[i-2];
            color.style.backgroundColor = "red";
        }
    }
})
