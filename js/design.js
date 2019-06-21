// defined variables
let header = document.querySelector('header');
let logo = document.querySelector('#logo');
let li = document.querySelectorAll('#menu > ul > li');
let menuBtn = document.querySelector('.navbar-toggle');
let menuList = document.querySelector("#menu");
let openIcon = document.querySelector('.navbar-toggle .fa-bars');
let closeIcon = document.querySelector('.navbar-toggle .fa-times');
let topBtn = document.getElementById('square');
let btn = document.getElementsByClassName('button_href');

//defined events
// ______________________________________________
//event for toggle menu button
menuBtn.addEventListener('click', runToggle);
//event for top button
topBtn.addEventListener('click', topFunction);

//page position to top of page on browser - refresh scroll=0
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// loop and for button have href add prevent default
for (let item of btn){
    item.addEventListener('click', function loadUs(e){
        //don't refresh
        e.preventDefault();
    });
}

// function for menu button
function runToggle(e){

    //menu list show and hidden
    menuList.classList.toggle('toggle_menu');

    // close and open icons show and hidden
    if(menuList.classList.contains('toggle_menu')){
        // change menu button icons
        openIcon.classList.add('disable_btn');
        closeIcon.classList.remove('disable_btn');
        // remove logo
        logo.classList.add('disable');
        //change header color
        header.classList.add('scrollColor');
    }
    else{
        //change menu button icons
        openIcon.classList.remove('disable_btn');
        closeIcon.classList.add('disable_btn');
        // add logo
        logo.classList.remove('disable');
        //change header color
        header.classList.remove('scrollColor');
    }
}

let toggle = menuList.classList.contains('toggle_menu');
let screenWidth = window.innerWidth <= 767;

//function for window scroll
window.addEventListener('scroll', (e)=>{

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        //remove logo
        logo.classList.add('disable');
        //show top button
        topBtn.classList.add('show_square');
        //loop for menlu ul li
        //defined variables loop
        let item = '';
        for (item of li ) {
            item.classList.add('borderLi');
        }

    }
    // if screen <= 767
   else if(screenWidth== true && menuList.classList.contains('toggle_menu')) {
        // remove logo
        //logo.classList.add('disable');
       return false;
    }
    else {
        //show logo
        logo.classList.remove('disable');
        //show top button
        topBtn.classList.remove('show_square');
        //loop for menu ul li
        for (item of li ) {
            item.classList.remove('borderLi');
        }

    }
});

//if click top button
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}








