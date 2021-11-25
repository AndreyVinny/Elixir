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
