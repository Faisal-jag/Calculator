let result=document.getElementById("iptext");
let calculate=(number)=>{
result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter Valid Input")
    }
}

function clr(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0,-1);
}










var icon = document.getElementById("icon");

        icon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src = "img/sun.png";
            } else{
                icon.src = "img/moon.png";
            }
        }