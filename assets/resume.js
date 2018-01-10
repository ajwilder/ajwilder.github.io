
var revealClickers = document.querySelectorAll('.reveal')

revealClickers.forEach(function(clicker){
  clicker.addEventListener('click', expandResumeSection)
})

function expandResumeSection(e) {
  var popup = document.querySelector(`#${this.dataset.reveal}`);
  popup.classList.toggle('active')
  document.querySelectorAll(`[data-reveal="${this.dataset.reveal}"]`)
  .forEach(function(element){
    element.classList.toggle('active');
  });
  $('html, body').animate({
    scrollTop: Math.min(popup.offsetParent.offsetTop, document.body.offsetHeight - window.innerHeight + popup.offsetParent.dataset.offset)
  }, 1000)

}
// Note: offset for each di hardcoded into html via popup.offsetParent.dataset.offset
