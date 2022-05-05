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


// popup du cochon
