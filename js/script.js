let h1Elem=document.querySelector('.title')

document.addEventListener('keyup',function(event){
    appendValueToDom(event)
    let userEventKey=event.key.toUpperCase()
    let mainKeyElem=document.getElementById(userEventKey)
    mainKeyElem.classList.add('hit')
    mainKeyElem.addEventListener('animationend',function(){
        mainKeyElem.classList.remove('hit')
    })
})
function appendValueToDom(event){
    if(event.key==='Backspace'){
        h1Elem.innerHTML=h1Elem.innerHTML.slice(0,-1)
        return
    }
    h1Elem.innerHTML+=event.key 
}