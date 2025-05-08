
                 
// // Custom cursor
const cursorDot  = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e){
 const posX = e.clientX; 
 const posY = e.clientY;

 cursorDot.style.left = `${posX}px`;
 cursorDot.style.top = `${posY}px`;

 // cursorOutline.style.left = `${posX}px`;
 // cursorOutline.style.top = `${posY}px`;

 cursorOutline.animate({
     left : `${posX}px`,
     top : `${posY}px`
 },  {duration : 500 , fill: "forwards"})
})
    
    
    // Mobile responsive menu
    let openMenu = document.querySelector('.fa-bars');
    let closeMenu = document.querySelector('.fa-x');
    let menuList = document.querySelector('.mobile-menu-list ul');
    let menuLinks = document.querySelectorAll('.mobile-menu-list ul li a')
    closeMenu.style.display='none';
    // menuList.style.height = '0%';

    openMenu.addEventListener('click', ()=>{
        menuList.classList.add('show-menu-list');
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', ()=>{
        menuList.classList.remove('show-menu-list');
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
    })
    document.querySelectorAll('.mobile-menu-list ul li a').forEach(link => {
  link.addEventListener('click', () => {
    menuList.classList.remove('show-menu-list');
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
  });
});
// Handle active menu click
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.forEach(l => l.classList.remove('active-menu')); // remove from all
        this.classList.add('active-menu'); // add to clicked one
    });
});