// Dummy News Data
const allNews = [
    { title: "News 1", image: "../foto/fotologoiabi/event3.png", description: "Description for News 1" },
    { title: "News 2", image: "../foto/fotologoiabi/event3.png", description: "Description for News 2" },
    { title: "News 3", image: "../foto/fotologoiabi/event3.png", description: "Description for News 3" },    
    { title: "News 4", image: "../foto/fotologoiabi/event3.png", description: "Description for News 4" },
    { title: "News 5", image: "../foto/fotologoiabi/event3.png", description: "Description for News 5" },
    { title: "News 6", image: "../foto/fotologoiabi/event3.png", description: "Description for News 6" },
    { title: "News 7", image: "../foto/fotologoiabi/event3.png", description: "Description for News 7" },
    { title: "News 8", image: "../foto/fotologoiabi/event3.png", description: "Description for News 8" },
    { title: "News 9", image: "../foto/fotologoiabi/event3.png", description: "Description for News 9" },
];

let currentPage = 1;
const newsPerPage = 6; // Number of news items per page
const newsContainer = document.getElementById("newsContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// Function to load news
function loadNews() {
    const start = (currentPage - 1) * newsPerPage;
    const end = start + newsPerPage;

    const newsToLoad = allNews.slice(start, end);

    newsToLoad.forEach(news => {
        const newsCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.description}</p>
                            <a href="#" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
            `;
        newsContainer.innerHTML += newsCard;
    });

     // Hide the Load More button if no more news
    if (end >= allNews.length) {
        loadMoreBtn.style.display = "none";
    }
}

// Event listener for Load More button
loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    loadNews();
});

// Initial load
loadNews();