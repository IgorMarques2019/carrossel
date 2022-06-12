// MENU ESCURO
window.addEventListener('scroll', () => {
  const menuTransp = document.querySelector('header');

  if (window.pageYOffset >= 1000) {
    menuTransp.classList.add('header-transp');
  } else {
    menuTransp.classList.remove('header-transp');
  }
})

//CARROSSEL DE IMAGENS DO BANNER
let time = 5000,
  firstImg = 0,
  imagens = ['./img1.jpg', './img2.jpg', './img3.jpg'],
  max = imagens.length;

let banner = document.querySelector('.banner');


function nextImg() {
  let breadSelect = document.querySelectorAll(".banner-bread a")

  breadSelect.forEach((item) => {
    item.classList.remove('selected')
  })
  banner.setAttribute('style', `background-image:url("${imagens[firstImg]}");`)
  breadSelect[firstImg].classList.add('selected')
}

let bread = document.querySelector('.banner-bread')


function start() {

  imagens.forEach(() => {
    bread.innerHTML = bread.innerHTML + `<a href="#"></a>`
  })

  setInterval(() => {
    firstImg++




    if (firstImg >= max) {
      firstImg = 0;
    }
    nextImg()
  }, time);

}
window.addEventListener('load', start)
