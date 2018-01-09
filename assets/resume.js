
var revealClickers = document.querySelectorAll('.reveal')

revealClickers.forEach(function(clicker){
  clicker.addEventListener('click', expandResumeSection)
})

function expandResumeSection(e) {
  var popup = document.querySelector(`#${this.dataset.reveal}`);
  popup.classList.toggle('active')

  $('html, body').animate({
    scrollTop: Math.min(popup.offsetParent.offsetTop, document.body.offsetHeight - window.innerHeight + 300)
  }, 1000)

}
