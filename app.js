const btn = document.querySelector('.click1')
const btn2 = document.querySelector('.click2')
const a = document.querySelector(".a")
const b = document.querySelector(".b")
const buttons = document.querySelector('.buttons')
const modal = document.querySelector('.modal')
const you = document.querySelector('.you')
const gif = document.querySelector('.gif-card')
const text = document.querySelector('.text')
const left = document.querySelector('.left')


buttons.addEventListener('click',()=> {
    btn.classList.toggle('active')
    btn2.classList.toggle('active')
    buttons.classList.toggle('active')
    a.style.color = "black"
    b.style.color = "black"
    modal.classList.toggle('active')

})
modal.addEventListener('click',()=> {
  modal.style.transform = "scale(10)"
buttons.style.opacity = "0"
you.style.color = "rgb(65, 65, 65)"
gif.style.display = "block"
gif.style.transform = "translateY(0)"
setTimeout( ()=>{
    text.style.opacity = "1"

},1000)
left.style.transform = "translate(0)"

})