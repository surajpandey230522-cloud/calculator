
let clear= document.getElementById('clr')
let percent= document.getElementById('percent')
let bk= document.getElementById('bk')
let divide= document.getElementById('divide')
let seven= document.getElementById('seven')
let eight= document.getElementById('eight')
let nine= document.getElementById('nine')
let mul= document.getElementById('mul')
let four= document.getElementById('four')
let five= document.getElementById('five')
let six= document.getElementById('six')
let subs= document.getElementById('subs')
let one= document.getElementById('one')
let two= document.getElementById('two')
let three = document.getElementById('three')
let add= document.getElementById('add')
let dblzero= document.getElementById('dblzero')
let zero= document.getElementById('zero')
let dot= document.getElementById('dot')
let equal= document.getElementById('equl')
let screen=document.getElementById('screen')
let flag_plus=false
let flag_minus=false
let flag_multiply=false
let flag_divide=false
let fir;
let sec;

add.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "+"
    flag_plus=true
})
subs.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "-"
    flag_minus=true
})
mul.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "X"
    flag_multiply=true
})
divide.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "/"
    flag_divide=true
})
one.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "1"
})
two.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "2"
})
three.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "3"
})
four.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "4"
})
five.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "5"
})
six.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "6"
})
seven.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "7"
})
eight.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "8"
})
nine.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "9"
})
zero.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "0"
})
dblzero.addEventListener("click",()=>{
    let suraj=screen.textContent
    screen.textContent=suraj + "00"
})
clear.addEventListener('click', ()=>{
    screen.textContent=''
})
bk.addEventListener('click',()=>{
    let suraj=screen.textContent
    screen.textContent= suraj.slice(0, suraj.length-1)
})
equal.addEventListener('click',()=>{
    let suraj=screen.textContent
    for(let i of suraj){
        if (i==="+" || i==="-" || i==="X" || i==="/"){
            let id=suraj.indexOf(i)
            fir=suraj.slice(0, id)
            sec=suraj.slice(id+1, suraj.length)
        }
    }
    if (flag_plus===true){
        screen.textContent=Number(fir)+ Number(sec)
        flag_plus=false
    }
    else if(flag_minus===true){
        screen.textContent=Number(fir)- Number(sec)
        flag_minus=false
    }
    else if(flag_multiply===true){
        screen.textContent=Number(fir)* Number(sec)
        flag_multiply=false
    }
    else if (flag_divide===true){
        screen.textContent=Number(fir)/Number(sec)
        flag_divide=false
    }
})
