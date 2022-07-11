let counter=0
let interval
function stopwatch(){
  counter=0
  interval=setInterval(
    ()=>{counter+=1
        document.getElementById("count").innerHTML=counter},1000)
  
  }

function clearStopWatch(){
  clearInterval(interval)
}

