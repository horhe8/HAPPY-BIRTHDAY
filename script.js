document.addEventListener('DOMContentLoaded', function() {
    // Slideshow data - replace with your own images and captions
   const slides = [
        { 
            imageUrl: '/HAPPY-BIRTHDAY/images/1.jpg',
            caption: 'Happy moments!'
        },
        { 
            imageUrl: '/HAPPY-BIRTHDAY/images/2.jpg',
            caption: 'Make a wish!'
        },
        { 
            imageUrl: '/HAPPY-BIRTHDAY/images/4.jpg',
            caption: 'One of one.'
        },
        { 
            imageUrl: '/HAPPY-BIRTHDAY/images/5.jpg',
            caption: 'Celebrating you!'
        },
        { 
            imageUrl: '/HAPPY-BIRTHDAY/images/3.jpg',
            caption: 'Enjoy your day!'
        },
        { 
            imageUrl: '/HAPPY-BIRTHDAY/images/6.jpg',
            caption: 'soft but strong'
        }
    ];

    // Initialize slideshow
    const slideshowInner = document.querySelector('.slideshow-inner');
    const slideIndicators = document.querySelector('.slide-indicators');
    
    slides.forEach((slide, index) => {
        // Create slide element
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.innerHTML = `
            <img src="${slide.imageUrl}" alt="Birthday image ${index + 1}">
            <div class="slide-caption">${slide.caption}</div>
        `;
        slideshowInner.appendChild(slideElement);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        slideIndicators.appendChild(indicator);
    });

    // Slideshow functionality
    const slidesCount = slides.length;
    let currentIndex = 0;
    const slideElements = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    function goToSlide(index) {
        if (index < 0) index = slidesCount - 1;
        if (index >= slidesCount) index = 0;
        
        slideshowInner.style.transform = `translateX(-${index * 100}%)`;
        
        // Update indicators
        indicators.forEach(ind => ind.classList.remove('active'));
        indicators[index].classList.add('active');
        
        currentIndex = index;
    }
    
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // Click on indicator
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            goToSlide(parseInt(indicator.dataset.index));
        });
    });
    
    // Auto-advance slides
    let slideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 5000);
    
    // Pause on hover
    slideshowInner.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slideshowInner.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    });
    
    // Message rotation
    const messages = document.querySelectorAll('.message');
    let messageIndex = 0;
    
    setInterval(() => {
        messages.forEach(msg => msg.classList.remove('active'));
        messageIndex = (messageIndex + 1) % messages.length;
        messages[messageIndex].classList.add('active');
    }, 3000);
    
    // Flower button functionality
    const flowerBtn = document.getElementById('flowerBtn');
    flowerBtn.addEventListener('click', () => {
        // Redirect to the flower animation page
        window.location.href = 'flowers.html';
    });
});
