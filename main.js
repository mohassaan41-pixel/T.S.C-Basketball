var typing = new Typed(".typing",{
    strings :["مدربين على اعلى مستوى","تسجيل جميع الفئات العمرية بالاتحاد","يوجد فرق للاولاد والبنات"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true 
})




var swiper = new Swiper(".team-slider",{
    spaceBetween:20 ,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickble:true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});
