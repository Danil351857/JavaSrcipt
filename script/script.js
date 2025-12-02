

const video = document.querySelector('.video-div video');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = 700;

    const scrollRatio = Math.min(scrollY / maxScroll, 1);
    const blur = scrollRatio * 10; 
    const brightness = 1 - scrollRatio * 0.8; 

    video.style.filter = `blur(${blur}px) brightness(${brightness})`;



  });
function toggleMenu() {
  document.querySelector('.navigation').classList.toggle('show');
}


const pCount = document.querySelectorAll("p").length;
console.log("Кількість <p>:", pCount);

const h2Count = document.querySelectorAll("h2").length;
console.log("Кількість <h2>:", h2Count);

const bodyBg = getComputedStyle(document.body).backgroundColor;
console.log("background-color body:", bodyBg);

const h1 = document.querySelector("h1");
const h1FontSize = getComputedStyle(h1).fontSize;
console.log("font-size h1:", h1FontSize);


const allElements = document.querySelectorAll("*");

allElements.forEach(el => {
    let prevColor = "";

    el.addEventListener("mouseenter", () => {
        prevColor = getComputedStyle(el).backgroundColor; 
        el.style.backgroundColor = "red";
    });

    el.addEventListener("mouseleave", () => {
        el.style.backgroundColor = prevColor;
    });
});


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(addImages, 5000);

    function addImages() {
        let imagesUrl = [
            "img/img-rust.jpg",
            "img/apr.jpg",
            "img/twitch-bg.jpg",
            "img/rustplusimage2.png"
        ];

        const container = document.getElementById('fds');

        const fragment = document.createDocumentFragment();

        let delay = 0;

        imagesUrl.forEach(url => {
            setTimeout(() => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = "Dynamic image";
                fragment.appendChild(img);

                container.appendChild(fragment);
            }, delay);

            delay += 1000;
        });
    }
});
