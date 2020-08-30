//When user scroll, header transform
$(window).scroll(function(){
     var h = $(window).scrollTop();
     if(h == 0){
        //Start
        document.querySelector('header').classList.remove('scroll-active');
        document.querySelector('.header__responsive').classList.remove('scroll-active');
     }else{
        //Scroll
        document.querySelector('header').classList.add('scroll-active');
        document.querySelector('.header__responsive').classList.add('scroll-active');
     }

    if(h >= 205){
        document.querySelector('header').classList.add('scroll-active-1');
    }else{
        document.querySelector('header').classList.remove('scroll-active-1');
    }

});

//Click video modal

var benefit = document.querySelector('.benefit__img');
var videoSrc = document.querySelector('.videoSrc');
var video = document.getElementById('myVideo');
var body= document.querySelector('body');
var closeBtn = document.querySelector('.close-modal-video');

var srcBenefit = [
    'https://cloudinary.fiverrcdn.com/video/upload/vc_auto,q_70/general_assets/logged_out_homepage/assets/campaign.mp4'
];
var srcTestimonial =[
    'https://cloudinary.fiverrcdn.com/video/upload/vc_auto,q_70/general_assets/logged_out_homepage/assets/Haerfest.mp4',
    'https://cloudinary.fiverrcdn.com/video/upload/vc_auto,q_70/general_assets/logged_out_homepage/assets/appsFlyer.mp4'
];

benefit.addEventListener('click', function(){
    openVideoModal(srcBenefit[0]);
});


document.querySelector('.testimonial').addEventListener('click', function(e){
    if(e.target.closest('.testimonial__item--video')){
        var item = e.target.closest('.testimonial__item--video');
        var id = parseInt(item.dataset.id.split('-')[1]);
        openVideoModal(srcTestimonial[id]);
    }
});

closeBtn.addEventListener('click', closeVideoModal);

document.querySelector('.modal-video').addEventListener('click', function(e){
    if(!e.target.closest('.video-wp')){
        closeVideoModal();
    }
} );

function openVideoModal(src){
     videoSrc.src=src;
     body.classList.add('show__modal-video');
     video.play();
}

function closeVideoModal(){
    body.classList.remove('show__modal-video');
    video.pause();
    video.currentTime = 0;
}

//Footer dropdown
$('.footer__item--title').click(function(){
    $(this).parent('.footer__item').children('ul').slideToggle(300);
    $(this).toggleClass('rotate-90');
});

$(window).resize(function(){
    var w = $(window).outerWidth();
    if(w > 600){
        $('.footer__top ul').slideDown();
    }else{
        $('.footer__top ul').slideUp();
        $('.footer__item--title').removeClass('rotate-90');
    }
});


//Toggle sidebar
var sidebar = document.querySelector('.mySidebar');
var overlay = document.querySelector('.overlay--sidebar');
var openBtn2 = document.querySelector('.btn__toggle--sideBar-2');
var openBtn1 = document.querySelector('.btn__toggle--sideBar');

openBtn1.addEventListener('click', openSidebar);
openBtn2.addEventListener('click', openSidebar);

overlay.addEventListener('click', closeSidebar);

function openSidebar(){
    body.classList.add('show-sidebar');
}

function closeSidebar(){
    body.classList.remove('show-sidebar');
}


//Sidebar dropdown
$('.main-dropdown--title').click(function(){
    $('.main-dropdown__menu').slideToggle(300);
    $(this).toggleClass('rotate-90');
});

$('.sub-dropdown--title').click(function(){
    $(this).parent('li').children('.sub-dropdown__menu').slideToggle();
    $(this).toggleClass('rotate-90');
});

