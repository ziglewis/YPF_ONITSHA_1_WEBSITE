
let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "2",
    
    autoplay: {
          delay: 3000,
          disableOnInteraction: false
      
      },
      
      
      
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
          
      //     var swiper = new Swiper(".mySwiper", {
      // effect: "coverflow",
      // centeredSlides: true,
      // autoplay: {
      // 	delay: 3000,
      // 	disableOnInteraction: false
      // },
      // loop: true,
      // slidesPerView: "2",
      // coverflowEffect: {
      // 	rotate: 0,
      // 	stretch: 30,
  // 		depth: 100,
  // 		modifier: 5,
  // 		slideShadows: true
  // 	},
  // 	navigation: {
  // 		prevEl: ".swiper-button-prev",
  // 		nextEl: ".swiper-button-next"
  // 	},
  // 	pagination: {
  // 		el: ".swiper-pagination",
  // 		clickable: false
  // 	}
  // });