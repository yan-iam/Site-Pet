window.addEventListener('load', function() {
  var slides = document.querySelectorAll('.carousel .slide');
  var textos = document.querySelectorAll('.carousel .texto');
  var links = [
    'link-da-noticia-1',
    'https://www.youtube.com/watch?v=Qd6x_lVOqEU',
    'link-da-noticia-3'
  ];
  var currentSlideIndex = 0;

  function showNextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    textos[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
    textos[currentSlideIndex].classList.add('active');
  }

  setInterval(showNextSlide, 2000); // Altere o valor para ajustar o tempo de exibição de cada slide (em milissegundos)

  // Adicionar links dinamicamente
  slides.forEach(function(slide, index) {
    var link = links[index];
    var img = slide.querySelector('img');
    var anchor = document.createElement('a');
    anchor.setAttribute('href', link);
    anchor.appendChild(img.cloneNode(true));
    img.parentNode.replaceChild(anchor, img);
  });
});



  const btn = document.getElementById("inicio")
  btn.addEventListener("click", function(){
    window.scroll(0,0)
  })

  const btn1 = document.getElementById("sobre")
  btn1.addEventListener("click", function(){
    
    const targetDiv1 = document.querySelector(".main");
    targetDiv1.scrollIntoView({ behavior: "smooth" });
    
  })

  const btn2 = document.getElementById("projetos")
  btn2.addEventListener("click", function(){
    
    const targetDiv2 = document.querySelector(".projeto");
    targetDiv2.scrollIntoView({ behavior: "smooth" });
    
  })
  
  const btn3 = document.getElementById("noticias")
  btn3.addEventListener("click", function(){
    
    const targetDiv3 = document.querySelector(".titulo");
    targetDiv3.scrollIntoView({ behavior: "smooth" });
    
  })
  
  