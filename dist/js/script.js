let menu = document.querySelector('.nav_menu'),
    burger = document.querySelector('.ham_menu'),
    body = document.querySelector('body');


burger.addEventListener('click', AddActive)

function AddActive () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
}

let navLink = document.querySelectorAll('.nav_item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.toggle('active');

}
;
var text = document.getElementById('text');
var parallaxInstance = new Parallax(text);
  var scane = document.getElementById('scane');
     var parallaxInstance = new Parallax(scane);

      let icon1 = document.getElementById('icon1');
              let icon2 = document.getElementById('icon2');
              let icon3 = document.getElementById('icon3');
              let icon4 = document.getElementById('icon4');
              let icon5 = document.getElementById('icon5');
              let icon6 = document.getElementById('icon6');
              let icon7 = document.getElementById('icon7');
              let icon8 = document.getElementById('icon8');


              window.addEventListener('scroll', function(){

              value = window.scrollY;

              icon1.style.top = -value * 0.5 + 'px';
              icon2.style.left = -value * 0.5 + 'px';
              icon3.style.left = -value * 0.5 + 'px';
              icon4.style.top = -value * 0.8 + 'px';
              icon5.style.top = -value * 0.3 + 'px';
              icon6.style.left = value * 0.2 + 'px';
              icon7.style.left = value * 0.2 + 'px';
              icon8.style.left = -value * 0.2 + 'px';

          })
;
const swiper = new Swiper('.services-slider', {
  navigation: {
    nextEl: '.swiper-button-next-service',
    prevEl: '.swiper-button-prev-service',
  },
  pagination: {
    el: '.swiper-pagination-service',
    clickable: true,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  mousewheel: {
      sensitivity: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1720: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

const swiper_master = new Swiper('.master-slider', {
  pagination: {
    el: '.swiper-pagination-master',
    clickable: true,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  mousewheel: {
      sensitivity: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});


const swiper_gallery = new Swiper('.gallery-slider', {
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
  },
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  mousewheel: {
      sensitivity: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1720: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
const questionTop = document.querySelectorAll ('.questions_top');
const questionBotttom = document.querySelectorAll ('.questions_bottom');

questionTop.forEach(btn => {
    btn.addEventListener('click', e => {
        questionBotttom.forEach(acc => {
            if(e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
                acc.classList.remove('active');
                questionTop.forEach(btn => btn.classList.remove('active'));
            };
        })

        const next = btn.nextElementSibling;
        next.classList.toggle('active');
        btn.classList.toggle('active');
    })
});;
const countres = document.querySelectorAll('.countre'),
      speed = 100000;

countres.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-tager')
        const count =  +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 5)
        } else {

            counter.innerText = target;
        }
    }
    updateCount();
})

    ;


