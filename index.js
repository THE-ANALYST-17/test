let input1=document.getElementById("data1");
let input2=document.getElementById("data2");
let res=document.getElementById('res')


document.getElementById("btn1").addEventListener("click",()=>{
    res.innerHTML=(+input1.value)+(+input2.value);
    // input1.value=""
    // input2.value=""
    
})
document.getElementById("btn2").addEventListener("click",()=>{
    res.innerHTML=input1.value - input2.value;
    // input1.value=""
    // input2.value=""
    
})
document.getElementById("btn3").addEventListener("click",()=>{
    res.innerHTML=input1.value * input2.value;
    // input1.value=""
    // input2.value=""
    
})
document.getElementById("btn4").addEventListener("click",()=>{
    res.innerHTML=input1.value / input2.value;
    // input1.value=""
    // input2.value=""
})

