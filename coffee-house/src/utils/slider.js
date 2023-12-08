document.addEventListener('DOMContentLoaded', function (event) {
    //window.addEventListener("resize", () => changeCountCards(window.innerWidth));
   /// window.addEventListener("resize", () => changeClientWidth(clientWidth));
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicator = document.querySelectorAll('.indicator');
    const slideWidth = sliderItems[0].clientWidth;
    let currentIndex = 0;
    let amountImg = 1;

    
    function changeIndicator(translateX) {
        indicator.forEach(ind => ind.classList.remove('active-indicator'));
        if (translateX === -2 * slideWidth) {
            indicator[2].classList.add('active-indicator');
        } else if (translateX === -slideWidth) {
            indicator[1].classList.add('active-indicator');
        } else {
            indicator[0].classList.add('active-indicator');
        }
    }

    indicator.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            stopInterval();
            indicator.forEach((otherBtn, index) => {
                if (index !== i) {
                    otherBtn.classList.remove('active-indicator');
                }
            });
            btn.classList.add('active-indicator');
            let translateX;
            i === 1 ? translateX = -slideWidth : i === 2 ? translateX = -2 * slideWidth : translateX = 0;
            slider.style.transform = `translateX(${translateX}px)`;
            restartIntervalIfNeeded();
        });
    });


    prevBtn.addEventListener('click', () => {
        stopInterval();
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = sliderItems.length - amountImg;
            slider.style.transform = `translateX(${-slideWidth * sliderItems.length
                }px)`;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
                currentIndex = sliderItems.length - amountImg;
                updateSlider();
            }, 0);
        } else {
            updateSlider();
        }
        restartIntervalIfNeeded();
    });

    nextBtn.addEventListener('click', () => {
        stopInterval();
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
        restartIntervalIfNeeded();
    });

    function updateSlider() {
        const translateX = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${translateX}px)`;
        changeIndicator(translateX);
        slider.style.transition = 'transform 0.5s ease-in-out';
    }


    function sliderMove() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = sliderItems.length - amountImg;
            slider.style.transform = `translateX(${-slideWidth * sliderItems.length
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
});