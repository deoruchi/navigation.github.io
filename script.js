let s = document.getElementById('menu')
let p = document.getElementById('cross')
let ss= document.getElementsByClassName('nav')

s.addEventListener('click',()=>{
    ss[0].classList.toggle('active')
    
})

p.addEventListener('click',()=>{
    ss[0].classList.toggle('active')
    
})

if(window.matchMedia("(min-width:1440px)").matches){
    ss[0].classList.remove('active')
}

let ds = document.getElementsByClassName('onee')
let sd = document.getElementsByClassName('two')

console.log(ds)
ds[0].addEventListener('click',()=>{
    ds[0].firstElementChild.classList.toggle('rotate');
    sd[0].classList.toggle('on')
})

ds[1].addEventListener('click',()=>{
    sd[1].classList.toggle('on')
    ds[1].firstElementChild.classList.toggle('rotate');
})

