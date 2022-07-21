const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const navigationMenu = document.querySelector(".navigation-menu");
const hamburger = document.querySelector(".hamburger");
const largeSliders = document.querySelectorAll('.swiper');
const prevArrow = document.querySelectorAll('.slider-button-prev');
const nextArrow = document.querySelectorAll('.slider-button-next');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigationMenu.classList.toggle('active');
})

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

const largeSlider = () => {
	
	largeSliders.forEach((slider, index)=>{
		let sliderLength = slider.children[0].children.length
		let result = (sliderLength > 1) ? true : false
		const swiper = new Swiper(slider, {
			direction: 'horizontal',
			loop: result,
			navigation: {
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},
			speed: 1000,
		});	
	})
}
window.addEventListener('load', largeSlider)
