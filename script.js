
const arrey = ['سنگ' , 'کاغذ' , 'قیچی']
const random = Math.floor(Math.random() * 3)
const bord = document.getElementById('bord')
const computer = document.getElementById('computer')
const span = document.getElementById('layer')
computer.innerText = arrey[random]
function mojadad(){
    location.reload();
}
function btnSang() {
    if(arrey[random] === 'سنگ'){
        bord.innerText = "جفت "   
    }
    if(arrey[random] === 'کاغذ'){
        bord.innerText = "تو باختی رفیق"
        bord.style.color="red" 
    }
    if(arrey[random] === 'قیچی'){
        bord.innerText = "ایول تو بردی داداش" 
        bord.style.color = 'green'
    }
    span.style.opacity = 0.2
}
function btnKaqaz() {
    if(arrey[random] === 'سنگ'){
        bord.innerText = "ایول تو بردی داداش" 
        bord.style.color="green"  
    }
    if(arrey[random] === 'کاغذ'){
        bord.innerText = "جفت"
    }
    if(arrey[random] === 'قیچی'){
        bord.innerText = "تو باختی رفیق"
        bord.style.color="red" 
    }
    span.style.opacity = 0.2
}
function btnGheychi() {
    if(arrey[random] === 'سنگ'){
        bord.innerText = "تو باختی رفیق" 
        bord.style.color="red"    
    }
    if(arrey[random] === 'کاغذ'){
        bord.innerText = " ایول تو بردی داداش"
        bord.style.color="green" 
    }
    if(arrey[random] === 'قیچی'){
        bord.innerText = "جفت"
    }
    span.style.opacity = 0.2
}



