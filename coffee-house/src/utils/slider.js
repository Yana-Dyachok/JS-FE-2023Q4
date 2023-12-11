document.addEventListener('DOMContentLoaded', function (event) {
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicator = document.querySelectorAll('.indicator');
    const activeIndicator = document.querySelector('.active-indicator');
    let slideWidth = sliderItems[0].clientWidth;
    let currentIndex = 0;
    let amountImg = 1;
    let touchStartX;

    function changeIndicator(translateX) {
        indicator.forEach((ind) => ind.classList.remove('active-indicator'));
        if (translateX === -2 * slideWidth) {
            indicator[2].classList.add('active-indicator');
        } else if (translateX === -slideWidth) {
            indicator[1].classList.add('active-indicator');
        } else {
            indicator[0].classList.add('active-indicator');
        }
    }

    function prevSliderMove() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = sliderItems.length - amountImg;
            slider.style.transform = `translateX(${
                -slideWidth * sliderItems.length
            }px)`;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
                currentIndex = sliderItems.length - amountImg;
                updateSlider();
            }, 0);
        } else {
            updateSlider();
        }
    }

    function nextSliderMove() {
        currentIndex++;
        if (currentIndex >= sliderItems.length - (amountImg - 1)) {
            currentIndex = amountImg === 1 ? 0 : sliderItems.length - amountImg;
            slider.style.transform = `translateX(${slideWidth}px)`;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
                currentIndex = 0;
                updateSlider();
            }, 0);
        } else {
            updateSlider();
        }
    }

    prevBtn.addEventListener('click', () => {
        stopInterval();
        prevSliderMove();
        restartIntervalIfNeeded();
    });

    nextBtn.addEventListener('click', () => {
        stopInterval();
        nextSliderMove();
        restartIntervalIfNeeded();
    });

    function updateSlider() {
        slideWidth = sliderItems[0].clientWidth;
        const translateX = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${translateX}px)`;
        changeIndicator(translateX);
        slider.style.transition = 'transform 0.5s ease-in-out';
    }

    function sliderMove() {
        slideWidth = sliderItems[0].clientWidth;
        prevSliderMove();
    }

    let intervalId = setInterval(sliderMove, 5000);
    let restartInterval = true;

    function stopInterval() {
        clearInterval(intervalId);
    }

    function restartIntervalIfNeeded() {
        restartInterval = true;
        if (restartInterval) {
            intervalId = setInterval(sliderMove, 5000);
            restartInterval = false;
        }
    }

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        const touchEndX = e.touches[0].clientX;
        const deltaX = touchStartX - touchEndX;
        if (deltaX > 20) {
            nextSliderMove();
        } else if (deltaX < -20) {
            prevSliderMove();
        }
    });

    slider.addEventListener('mouseover', (e) => {
        stopInterval();
        activeIndicator.style.animationPlayState = 'paused';
    });
    
    slider.addEventListener('mouseout', (e) => {
        restartIntervalIfNeeded();
        activeIndicator.style.animationPlayState = 'running';
    });

    slider.addEventListener('mousedown', (e) => {
        stopInterval();
        activeIndicator.style.animationPlayState = 'paused';
    });
    
    slider.addEventListener('mouseup', (e) => {
        restartIntervalIfNeeded();
        activeIndicator.style.animationPlayState = 'running';
    });
});