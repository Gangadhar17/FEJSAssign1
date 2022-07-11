const date=new Date()
let hour=date.getHours()
if(hour>5 && hour<12){
    document.getElementById("TimeofDay").innerHTML="Hello there! Let's start our morning with a new quote."
}
else if(hour>=12 && hour<17){
    document.getElementById("TimeofDay").innerHTML="Hello there! Let's start our afternoon with a new quote."
}
else{
    document.getElementById("TimeofDay").innerHTML="Hello there! Let's start our evening/night with a new quote."
}

let quotes=["You can totally do this.","Don’t tell people your plans.Show them your results.","We can do anything we want to if we stick to it long enough.","When nothing goes right, go left.","Impossible is for the unwilling.","Once you choose hope, anything’s possible.","I can and I will.","Take the risk or lose the chance.","Good things happen to those who hustle.","He who is brave is free."]

function quoteGen(){
    document.getElementById("quote").innerHTML=quotes[Math.floor((Math.random()*quotes.length))]
    document.body.style.backgroundColor=colour[Math.floor((Math.random()*quotes.length))]
}

let colour=["cyan","light green","light blue","lime","grey","white","teal","#fff176","#80deea","#ba68c8"]


