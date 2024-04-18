const swiper = new Swiper('.slider-main', {
    // Optional parameters
    loop: true,
    speed: 600,
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-page__arrow_next',
      prevEl: '.main-page__arrow_prev',
    },
  
  });


  const nav = document.querySelector(".tabs-estate__nav");
  const navArray = nav.querySelectorAll(".tabs-estate__btn");

  const tabs = document.querySelector(".tabs-estate__items");
  const tabsArray = tabs.querySelectorAll(".tabs-estate__item-block");

  nav.addEventListener("click", function(event) {
    myFunc(event);
  });

  function myFunc(event) {
    if (event.target.closest(".tabs-estate__btn")) {
      navArray.forEach((element) => {
        element.classList.remove("tabs-estate__btn_active");
      });
      event.target.classList.add("tabs-estate__btn_active");

      let currIndex = null;
      navArray.forEach((element, index) => {
        if (element.classList.contains("tabs-estate__btn_active")) {
          currIndex = index;

        }
      });


      tabsArray.forEach((element) => {
        element.classList.remove("block-item_active");
      });
      tabsArray[currIndex].classList.add("block-item_active");

      
    }
  }
