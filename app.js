let menuIcon =document.querySelector(".menu_icon");
let menuList =document.querySelector(".menu_list");

menuIcon.onclick = ()=>{

    menuList.classList.toggle("open");
}
let sections = document.querySelectorAll('section');
let menu_lists = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            menu_lists.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul li a[href*= '+ id +']').classList.add('active');
            });
        }
    });
};

