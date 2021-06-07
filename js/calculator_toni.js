

let selectedСlassAvto=0;
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementsByClassName("class-auto")[0].classList.add('card-active');
    calculation(selectedСlassAvto);
});

//переменные калькулятора



window.onclick=(event)=>
{
let type_avto=document.getElementsByClassName("calculator-icon");
let card_avto=document.getElementsByClassName("class-auto");
let CheckBox=document.getElementsByClassName("glass-cb");
for(let i=0;i<type_avto.length;i++)
{
    
    if(event.target == type_avto[i])
    {
        for(let i=0;i<type_avto.length;i++)
        {
            card_avto[i].classList.remove('card-active');
            
        }
        
        card_avto[i].classList.add('card-active');
        selectedСlassAvto=i;
        calculation(i);
    }
}
  
for(let i=0;i<CheckBox.length;i++)
{
    
    if(event.target == CheckBox[i]){
        calculation(selectedСlassAvto);
    }
}
}

let calculation=(classAvto)=>
{
let CheckBox=document.getElementsByClassName("glass-cb");
let UltraVision=document.getElementsByClassName("calculator-uv__text")[0];
let SunTek=document.getElementsByClassName("calculator-st__text")[0];
let priceClssAvto=0;
switch(classAvto)
{
    case 0:
        priceClssAvto=0;
    break;

    case 1:
        priceClssAvto=400;
    break;

    case 2:
        priceClssAvto=600;
    break;
}
//Лобовое, передние боковые, Задние дверные, полоса
const basePrice=[1600,1100,1300,1500,500];
let price=0;

for(let i=0;i<CheckBox.length;i++)
{
    //debugger;
    if(CheckBox[i].checked)
    {
        price=price+basePrice[i];
        
    }
    
}
if(price!=0)
{
    UltraVision.innerHTML=price+priceClssAvto+" руб";
    SunTek.innerHTML=price+priceClssAvto+400+" руб";
}
else
{
    UltraVision.innerHTML=0+" руб";
    SunTek.innerHTML=0+" руб";
}

}