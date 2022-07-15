const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");



//Accordion implementation

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