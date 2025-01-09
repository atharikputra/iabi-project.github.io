function showDescription(id) {
    const descriptions = document.querySelectorAll('.event-description');
    descriptions.forEach(desc => desc.classList.add('d-none')); // Hide all descriptions
    const selectedDescription = document.getElementById(id);
    selectedDescription.classList.toggle('d-none'); // Toggle the selected description
}