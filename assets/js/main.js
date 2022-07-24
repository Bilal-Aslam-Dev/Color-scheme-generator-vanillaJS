
// product slider + scroll + lightroom
var mainImgComp = document.querySelector('.product_display .main_img22 img');
var imagesArr = document.querySelectorAll('.product_display .pro_catalog button');
//main img setter
imagesArr.forEach(item => {
    item.ondragstart = function () { return false; };
    item.addEventListener('click', () => {
        for (let x=0;x<imagesArr.length;x++){
            imagesArr[x].classList.remove('active');
        }
        item.classList.add('active');
        let src = item.firstElementChild.getAttribute('src');
        mainImgComp.setAttribute('src', src);
    });
});
// Scroll funcitons
var slider = document.querySelector('.product_display .pro_catalog');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});
//lightroom
let lightRoomCls=document.querySelector('.fullscreen_product_img button');
let lightRoomOpn=document.querySelector('.product_display .main_img22 button');
let lightRoom=document.querySelector('.fullscreen_product_img');
let lightRoomImgComp=document.querySelector('.fullscreen_product_img img');
lightRoomOpn.addEventListener('click',()=>{
    lightRoom.classList.add('open');
    document.querySelector('body').classList.add('overflow-none');
    let src=mainImgComp.getAttribute('src');
    console.log("🚀 ~ file: main.js ~ line 52 ~ lightRoomOpn.addEventListener ~ src", src)
    lightRoomImgComp.setAttribute('src', src);
})
lightRoomCls.addEventListener('click',()=>{
    lightRoom.classList.remove('open');
    document.querySelector('body').classList.remove('overflow-none');
})