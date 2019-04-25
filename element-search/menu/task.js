/*
function siteMenu() {
    let menuLink = Array.from(document.querySelectorAll('ul li a.menu__link'));
    let menuSub = Array.from(document.querySelectorAll('ul.menu_sub'));
    let about = menuLink[1];
    let services = menuLink[5];
    

    about.onclick = function() {
        if(menuSub[0].classList.contains('menu_active')){
            menuSub[0].classList.remove('menu_active');
        }else{
            menuSub[0].className+= ' menu_active';
            menuSub[1].className = 'menu menu_sub';
        }
        return false;
    };

    services.onclick = function() {
        if(menuSub[1].classList.contains('menu_active')){
            menuSub[1].classList.remove('menu_active');
        }else{
            menuSub[1].className+= ' menu_active';
            menuSub[0].className = 'menu menu_sub';
        }
        return false;
    }
}

siteMenu()
*/

const menuLinks = document.querySelectorAll('.menu__link');

for (let link of Array.from(menuLinks)) {
    link.onclick = function () {

        const parent = link.parentElement;
        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
            parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            parent.querySelector('.menu_sub').className = 'menu menu_sub'
        }

        if (link.closest('.menu_main')) {
            return false
        }
    }
}
