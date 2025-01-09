// Select all pages
const pages = document.querySelectorAll(".page");
let currentPageIndex = 0; // Start from the first page

function navigatePage(direction) {
    // Hide the current page
    pages[currentPageIndex].classList.remove("active");

    // Update the page index
    currentPageIndex += direction;

    // Loop through pages
    if (currentPageIndex < 0) {
        currentPageIndex = pages.length - 1; // Go to the last page
    } else if (currentPageIndex >= pages.length) {
        currentPageIndex = 0; // Go back to the first page
    }

    // Show the new page
    pages[currentPageIndex].classList.add("active");
}

// Page 3
function setMenu(menuName) {
// Update judul dan deskripsi
const menuTitle = document.getElementById('menu-title');
const menuDescription = document.getElementById('menu-description');

// Update konten berdasarkan menu
menuTitle.textContent = menuName;
menuDescription.textContent = `Informasi mengenai ${menuName}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

// Update tombol yang aktif
const buttons = document.querySelectorAll('.menu-button');
buttons.forEach(button => {
    button.classList.remove('active'); // Hapus kelas active dari semua tombol
        if (button.textContent === menuName) {
            button.classList.add('active'); // Tambahkan kelas active ke tombol yang sesuai
        }
    });
}

// Fungsi untuk inisialisasi halaman
window.onload = function () {
    setMenu('Anggota'); // Set default menu ke "Anggota" saat halaman pertama kali dimuat
};