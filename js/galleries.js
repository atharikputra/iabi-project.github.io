function filterGallery(category, title) {
    // Update the gallery title
    document.getElementById("gallery-title").textContent = title;

    // Get all gallery items
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Show/hide items based on category
    galleryItems.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Set default view to All Events on page load
window.onload = function () {
    filterGallery('all', 'All Events');
};

function setModalImage(src) {
    console.log("Image Source:", src); // Debugging
    const modalImage = document.getElementById("modalImage");
    modalImage.src = src;
    modalImage.alt = "Full Image";
}