const loadImages = document.querySelectorAll('img.lazy')

const observer = new IntersectionObserver(observerHandler, {
    threshold: 1.0
})

function observerHandler(entries, observer) {
  entries.forEach((entry) => {
     if (entry.intersectionRatio > 0) {
       entry.target.src = entry.target.dataset.src
       entry.target.classList.remove('lazy')
     } 
  });
}
loadImages.forEach(img => observer.observe(img))

//now we need to point to our webp generated files
var content = document.getElementById('webp').innerHTML;
    content = content.replace("jpg", "webp");
document.getElementById('webp').innerHTML = content;