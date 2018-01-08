var footer = document.querySelector('.footer')
var footerLinks = footer.querySelectorAll('.social-link')

footerLinks.forEach(function(link) {
  link.addEventListener('mouseenter', popupBox)
  link.addEventListener('mouseleave', unpopupBox)
})

function popupBox() {
  this.querySelector('.contact_label').classList.add('active');
  this.classList.add('active')
}
function unpopupBox() {
  this.querySelector('.contact_label').classList.remove('active');
  this.classList.remove('active')
}
