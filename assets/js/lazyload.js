const images = document.querySelectorAll('inner image')

const observer = new IntersectionObserver(obserberHandler)

function obserberHandler(entries, observer) {
    for (const entry of entries) {
        if (entry.IntersectionObserver > 0) {
            console.log("hiii")
            entry.target.src = entry.target.dataset.src
        }
    }
}
images.forEach(img => observer.observe(img))