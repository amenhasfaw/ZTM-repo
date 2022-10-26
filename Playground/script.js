const ul = document.getElementById('list')
const btn = document.querySelector('button')
const input = document.querySelector('input')
const bg = document.getElementById('bg')
const body = document.querySelector('body')
const rgb = document.getElementById('rgb')

    btn.addEventListener('click', () => {
        if(input.value.length > 0){
        const li = document.createElement("li")
        li.appendChild(document.createTextNode( input.value ))
        ul.appendChild(li)
        input.value = ''
        } 
    })

    input.addEventListener("keypress" , (e)=>{
        if(input.value.length > 0 && e.key === 'Enter'){
            const li = document.createElement("li")
            li.appendChild(document.createTextNode( input.value ))
            ul.appendChild(li)
            input.value = ''}
    })

    bg.addEventListener("input", ()=>{
        body.style.background = bg.value;

        rgb.textContent = body.style.background + ";"
    })