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
