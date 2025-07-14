let result=document.getElementById("result")


function addvalue(elementvalue){
    result.value+=elementvalue
}

function canclevalue(){
    result.value=""
}

function deletevalue(){
    result.value= result.value.slice(0,result.value.length-1)
}
  

function equalvalue(){
    result.value=eval(result.value)

}