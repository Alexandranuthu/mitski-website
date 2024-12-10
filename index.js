document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 1;
    const items = document.querySelectorAll("#slider li");
    const totalItems = items.length;
    const visibleSlides = 4;  // Number of items visible at once
    const slideWidth = items[0].offsetWidth + 16; // Width + gap (4 for each side)

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - visibleSlides) {
            currentIndex++;
        } else {
            currentIndex = 1; // Reset to the beginning
        }
        updateSliderPosition();
        
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - visibleSlides; // Move to the last set of slides
        }
        updateSliderPosition();
    });

   
});




