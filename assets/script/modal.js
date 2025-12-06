document.addEventListener('DOMContentLoaded', function() {
    // --- LOGIKA FILTROWANIA ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- LOGIKA LIGHTBOXA (POWIĘKSZANIE ZDJĘĆ) ---
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');

    // Funkcja otwierająca modal
    function openModal(e) {
        modal.style.display = "block"; // Zmieniono z 'flex' na 'block', aby pasowało do nowych stylów CSS
        modalImg.src = e.currentTarget.querySelector('img').src;
    }

    // Funkcja zamykająca modal
    function closeModal() {
        modal.style.display = "none";
    }
    
    // Dodaj event listener do każdego zdjęcia w galerii
    galleryItems.forEach(item => {
        item.addEventListener('click', openModal);
    });

    // Zamknij modal po kliknięciu na 'X'
    closeBtn.addEventListener('click', closeModal);

    // Zamknij modal po kliknięciu poza zdjęciem (na tło)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Zamknij modal po naciśnięciu klawisza Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});