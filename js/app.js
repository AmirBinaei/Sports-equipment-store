let menu=document.getElementById('menu')

menu.style.maxHeight='0px'
menu.style.padding='0px'

function opennav(){
    if(menu.style.maxHeight=='0px'){
        menu.style.maxHeight = '160px';
        menu.style.padding='10px 50px 10px 0'
        menu.style.transition='all .7s'
    }else{
        menu.style.maxHeight='0px'
        menu.style.padding='0px'
    }
}



let productimg = document.getElementById('productimg');
var smalimg = document.getElementsByClassName('smalimg');

smalimg[0].onclick = function(){
    productimg.src = smalimg[0].src;
}
smalimg[1].onclick = function(){
    productimg.src = smalimg[1].src;
}
smalimg[2].onclick = function(){
    productimg.src = smalimg[2].src;
}
smalimg[3].onclick = function(){
    productimg.src = smalimg[3].src;
}


function prosingle(){
    window.location.href= './single-product.html'
} 
function prosinglee(){
    window.location.href= './html/single-product.html'
} 
