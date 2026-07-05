/*--------------------------------------------------
    Template Name: Mariam - Personal Portfolio Template
--------------------------------------------------*/

    /* -----------------------------------
             Preloader
    ----------------------------------- */
    function loading() {
        "use strict";
        $('.loading').delay(500).fadeOut(500);
    }
    loading()
   /* -----------------------------------
             Switch Mode
    ----------------------------------- */
    const setTheme = (theme) => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
        }

    const getTheme = () => {
        const theme = localStorage.getItem('theme');
        theme && setTheme(theme);
    }
    getTheme();

    /* -----------------------------------
                Menu
    ----------------------------------- */
    function menu() {
        "use strict";
        document.getElementById("buttonToggle").addEventListener("click", function () {
            document.querySelector(".header--left").classList.toggle("header--open");
        });
    
        document.querySelector(".header__nav__cross").addEventListener("click", function () {
            document.querySelector(".header--left").classList.remove("header--open"); 
        });
    
        var navLinks = document.querySelectorAll(".nav__link");
        navLinks.forEach(function (navLink) {
            navLink.addEventListener("click", function () {
                document.querySelector(".header--left").classList.remove("header--open");
            });
        });
    }
    menu()

    /* -----------------------------------
	       magnificPopup
    -----------------------------------*/
    $('.portfolio__items').magnificPopup({
        delegate: '.btn-view',
        type: 'image',
        tLoading: '',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
    });


     /* -----------------------------------
	       Testimonials Sliders
      -----------------------------------*/
    var swiper = new Swiper(".testimonials__swiper", {
        spaceBetween: 24,
        slidesPerView: 3,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          },
      });


    /* -----------------------------------
	       scrollCue
    -----------------------------------*/
      scrollCue.init({
        duration : 300,
        interval : 0,
        percentage : 0.8
      });
    
      /* -----------------------------------
	      Form Validation
      -----------------------------------*/

      function FormValidation(){
        'use strict'
  
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      }
      FormValidation()

