// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

const leadPhotos = document.querySelector('#lead-photos');
const svgs = [...new Array(11)].map(() => 'circle.svg');
const leadImages = svgs.map((src) => {
    const img = document.createElement('img');
    img.classList.add('circle', 'show');
    img.src = src;
    img.alt = "circle";
    leadPhotos.append(img);
    return img;
});
document.addEventListener('scroll', () => {
    for(const img of leadImages){
        const boundingClientRect = img.getBoundingClientRect();
        const stagger = Math.max(boundingClientRect.height, boundingClientRect.width) * (boundingClientRect.x / document.body.getBoundingClientRect().width);
        const y = boundingClientRect.y + stagger;
        const offset = Math.max(y-window.innerHeight*1.2, 0) > 0 ? 2000 : 0;
        img.style.transform = `translateX(${offset}px)`;
    }
});