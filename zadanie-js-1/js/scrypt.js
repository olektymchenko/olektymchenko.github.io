

let btn = document.getElementById("oblicz").addEventListener("click",function(){
    let elements = document.getElementsByTagName("div");
    let workers = [];
    //////////////////////////////////////////////////
    for(let i = 3; i< 23 ;i++)
    {
    
        let name = document.getElementsByClassName("pracownik")[i-3].innerHTML;
        let time = document.getElementsByClassName("czas")[i-3].value;
        let price = document.getElementsByClassName("stawka")[i-3].value;
        let salary = document.getElementsByClassName("wyplata")[i-3];
        guyMoney = time*price;
        salary.innerText = guyMoney;
        
        if(time > 160)
        {
            let differenceTime = time - 160;
            let differenceSalary = price *2;
            let newSalary= 160 * price + (differenceSalary * differenceTime);
            salary.innerText = newSalary;
            guyMoney = newSalary;
        }
        if(time < 100)
        {
            elements[i].style.backgroundColor = "red";
        }
    
        let newGuy = {
            workerName : name,
            salary : price,
            hours: time,
            money : guyMoney
        }
        workers.push(newGuy);
    }
    workers.sort((a, b) => (a.hours > b.hours) ? 1: -1 );
    
    for(let i=0;i<3;i++)
    {
        let h4 = document.createElement("h4");
        let list = document.getElementById("najlepsi-pracownicy");
        h4.innerText = i+1 +"."+ workers[18-i].workerName +" prezepracowal "+ workers[18-i].hours + " godzin";
        list.appendChild(h4);
    }
})
