

function submit(){
    
    console.log("ID Details submitted")

    var x = document.getElementById("sname").value
    var y = document.getElementById("sid").value
    var z =document.getElementById("img").src
    
    if((y.length)==10 && y!=="" && x!==""){
        document.getElementById("input").innerHTML=x

        document.getElementById("notvalid").innerHTML=""
        document.getElementById("input1").innerHTML=y
    }
    else{
        document.getElementById("notvalid").innerHTML="Please enter a valid Input"

    }
    
    
}

function upload(){
    document.getElementById("upload")=z
}
