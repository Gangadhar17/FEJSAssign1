const interval=setInterval(startTime,1000)

function startTime(){
    var current = new Date()
    let time=current.toTimeString()
    document.getElementById("time").innerHTML=time
   
}

function stopTime(){
    clearInterval(interval)
}