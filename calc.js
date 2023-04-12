function dispalyData(n){
    result.value+=n
}

function allClear(){
    result.value=""
}
function evalEqual(){
   // n=result.value
   // out=eval(n)
    //result.value=out
    result.value=eval(result.value)
}

function backSpace(){
    s=result.value
    result.value=s.slice(0,-1)
}