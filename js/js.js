setInterval(()=> {
    const time = document.querySelector(".time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes ;
    }
    if(seconds < 10){
        seconds = "0" + seconds ;
    }
    time.textContent = hours +":" + minutes + ":" + seconds ;       })
    function scrollHeader(){
        const nav = document.querySelector('header')
        
        if(this.scrollY >= 10) nav.classList.add('fix'); else nav.classList.remove('fix')
    }
    window.addEventListener('scroll', scrollHeader);
    
    var logo = document.querySelector(".logo");
    var logoone = document.querySelector(".momaiz");
    
    function changemomaiz(){
        logoone.innerHTML = 'El-Momaiz';
    }
    function changemomaiz1(){
        logoone.innerHTML = 'المميز للإستيراد و التصدير';
    }
 
    var menu = document.querySelector(".menu");
    var list = document.querySelector('.nav ul')
    menu.addEventListener('click',function(){
       list.classList.toggle('show');
    })
    list.addEventListener('click',function(){
        list.classList.toggle('show');
     })

    
