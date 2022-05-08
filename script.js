// slider videos
function videoUrl(projetperso){
            document.getElementById("slider").src = projetperso;
        }

// fullscreen galerie        
    const imgs = document.querySelectorAll('.bandeau img');
    const fullPage = document.querySelector('#fullpage');
        
    imgs.forEach(img => {
        img.addEventListener('click', function() {
            fullPage.style.backgroundImage = 'url(' + img.src + ')';
            fullPage.style.display = 'block';
          });
        });

// popup contact
let ide = document.getElementById('fname');
let mail = document.getElementById('emailadress');

const button = document.querySelector('.button');
button.addEventListener('click', function(event){
  event.preventDefault();
  alert("Merci pour votre message" + " " + ide.value + ", nous vous contacterons dans les meilleurs délais à l'adresse" + " " + emailadress.value + ", bisous.");
  window.open ("https://www.youtube.com/watch?v=09m0B8RRiEE", '_blank');
});


// popup trolololo

const pop = document.querySelector('#twi');
const rey = document.querySelector('#rey');

pop.addEventListener('mouseover', function (){
  rey.style.opacity = "1";
  rey.style.transition = "1s";
});

pop.addEventListener('mouseleave', function (){
  rey.style.opacity = "0";
});

const popb = document.querySelector('#jem');
const marion = document.querySelector('#marion');

popb.addEventListener('mouseover', function (){
  marion.style.opacity = "1";
  marion.style.transition = "1s";
});

popb.addEventListener('mouseleave', function (){
  marion.style.opacity = "0";
});

