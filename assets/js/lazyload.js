const loadImages = document.querySelectorAll('.inner img')

const observer = new IntersectionObserver(observerHandler)
  

function observerHandler(entries, observer) {
    for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
            //console.log("hiii")
            entry.target.src = entry.target.dataset.src
        }
    }
}
loadImages.forEach(img => observer.observe(img))