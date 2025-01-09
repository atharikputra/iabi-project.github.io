// Slider
document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".slider-dots .dot");
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const sliderItems = document.querySelectorAll(".slider-item");
    let currentIndex = 0;

    function updateActiveDot() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function showSlide(index) {
        const slideWidth = sliderItems[0].clientWidth;
        sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
        updateActiveDot();

        // Pause all videos except the current slide
        sliderItems.forEach((item, idx) => {
            const video = item.querySelector("video");
            if (video) {
                if (idx === index) {
                    video.play(); // Play video on active slide
                } else {
                    video.pause(); // Pause other videos
                    video.currentTime = 0; // Reset video to the beginning
                }
            }
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }, 3000);
});



//Events
document.addEventListener('DOMContentLoaded', () => {
    const eventsData = [
        {
            image: '../foto/gambarslide1.png',
            description: 'Event 1 description',
            date: '01 Jan 2025',
            link: 'event1.html'

        },
        {
            image: '../foto/gambarslide2.png',
            description: 'Event 2 description',
            date: '02 Jan 2025',
            link: 'event1.html'

        }
    ];

    function createSlider(data, section) {
        let index = 0;

        const updateContent = () => {
            const image = section.querySelector('.section-image');
            const description = section.querySelector('.section-description p');
            const date = section.querySelector('.section-description .date');

            image.src = data[index].image;
            description.textContent = data[index].description;
            date.textContent = data[index].date;

            image.onclick = () => {
                window.location.href = data[index].link;
            };
        };

        section.querySelector('.navigation button:nth-child(1)').addEventListener('click', () => {
            index = (index - 1 + data.length) % data.length;
            updateContent();
        });

        section.querySelector('.navigation button:nth-child(2)').addEventListener('click', () => {
            index = (index + 1) % data.length;
            updateContent();
        });

        updateContent();
    }

    createSlider(eventsData, document.querySelector('.col-md-6:nth-child(1) .section'));
    createSlider(publicationsData, document.querySelector('.col-md-6:nth-child(2) .section'));
});


// Publications
document.addEventListener('DOMContentLoaded', () => {
    const publications = [
        {
            title: "Coming Soon",
            description: " ",
        },
    ];

    let currentIndex = 0;

    const titleElement = document.querySelector('.publications-content h4');
    const descriptionElement = document.querySelector('.publications-content p');
    const imageElement = document.querySelector('.publications-image');

    function updateContent(index) {
        const publication = publications[index];
        titleElement.textContent = publication.title;
        descriptionElement.textContent = publication.description;
        imageElement.textContent = publication.image;
    }

    document.querySelector('.prev-button').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + publications.length) % publications.length;
        updateContent(currentIndex);
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % publications.length;
        updateContent(currentIndex);
    });

    updateContent(currentIndex);
});

// Galleries
document.addEventListener("DOMContentLoaded", () => {
    const galleriesContainer = document.querySelector(".galleries-container");

    galleriesContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        galleriesContainer.scrollBy({
            left: e.deltaY < 0 ? -300 : 300,
            behavior: "smooth",
        });
    });
});

// Partners
document.addEventListener("DOMContentLoaded", () => {
    const partnersLogos = document.querySelector(".partners-logos");
    let animationInterval;

    const startScrolling = () => {
        animationInterval = setInterval(() => {
            partnersLogos.scrollBy({ left: 1, behavior: "smooth" });
        }, 30); // Sesuaikan kecepatan scroll di sini
    };

    const stopScrolling = () => {
        clearInterval(animationInterval);
    };

    // Mulai scrolling otomatis
    startScrolling();

    // Hentikan scrolling ketika mouse berada di atas elemen
    partnersLogos.addEventListener("mouseover", stopScrolling);

    // Lanjutkan scrolling ketika mouse keluar dari elemen
    partnersLogos.addEventListener("mouseout", startScrolling);
});