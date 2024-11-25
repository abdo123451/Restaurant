let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let elskhawy = document.querySelector('.elskhawy');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    elskhawy.style.fontSize = value + 'px';
    if(scrollY >= 57){
        elskhawy.style.fontSize = 57 + 'px';
        elskhawy.style.position = 'fixed';
        if(scrollY >= 472){
            elskhawy.style.display = 'none';
        }else{
            elskhawy.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#327fab,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}