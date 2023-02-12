const loadImages = document.querySelectorAll('inner img')

const observer = new IntersectionObserver(obserberHandler)

function obserberHandler(entries, observer) {
    for (const entry of entries) {
        if (entry.IntersectionObserver > 0) {
            console.log("hiii")
            entry.target.src = entry.target.dataset.src
        }
    }
}
loadImages.forEach(img => observer.observe(img))