document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const progressBar = document.querySelector('.progress-bar');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        prevButton.style.display = currentSlide === 0 ? 'none' : 'inline-block';
        nextButton.innerHTML = currentSlide === slides.length - 1 ? 'Finalizar' : 'Siguiente <i class="fas fa-chevron-right"></i>';
        updateProgressBar();
    }

    function updateProgressBar() {
        const progress = ((currentSlide + 1) / slides.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
    }

    prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => {
        if (currentSlide === slides.length - 1) {
            Swal.fire({
                title: '¡Presentación finalizada!',
                text: 'Gracias por su atención.',
                icon: 'success',
                confirmButtonText: 'Cerrar'
            });
        } else {
            showSlide(currentSlide + 1);
        }
    });

    // Inicializar la primera diapositiva
    showSlide(0);
});
