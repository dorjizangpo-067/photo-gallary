
const heroH1El = document.querySelector('.hero-text h1');
const heroTextEl = document.querySelector('.hero-text .texts');
const heroProfileEl = document.querySelector('.hero-img');
const icons = document.querySelectorAll(".social-media-icons a");
const posts = document.querySelectorAll(".post-card");
const charDescriptionPostEl = document.querySelectorAll('.post-text p');
const seeMoreBtn = document.querySelectorAll('.see-more');

// hero animation
setTimeout(() => {
    heroTextEl.style.transform = "translateX(0px)";
    heroTextEl.style.opacity = "1";
    heroH1El.style.transform = "translateY(0px)";
    heroH1El.style.opacity = "1";
    heroProfileEl.style.transform = "translateX(0px)";
    heroProfileEl.style.opacity = "1";
}, 10);

// hero social media stagger
icons.forEach((icon, index) => {
    setTimeout(() => {
        icon.style.opacity = "1";
        icon.style.transform = "translateY(0px)";
    }, index * 300);
});

// post fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
posts.forEach(post => observer.observe(post));

//see more button
document.querySelectorAll(".post-text").forEach(postText => {
    const paragraph = postText.querySelector(".post-text p");
    const button = postText.querySelector(".see-more");
    
    const fullText = paragraph.innerText;
    const truncatedText = fullText.substring(0, 150) + "...";
    
    let isExpanded = false;
    
    // Initially set to truncated text
    paragraph.innerText = truncatedText;
    
    button.addEventListener("click", () => {
        if (isExpanded) {
            paragraph.innerText = truncatedText;
            button.innerText = " See more";
        } else {
            paragraph.innerText = fullText;
            button.innerText = " See less";
        }
        isExpanded = !isExpanded;
    });
});
// display image
// Get the modal and close button elements
const modal = document.querySelector('#imageModal');
const fullImage = document.querySelector('#fullImage');
const closeButton = document.querySelector('.close-button');

// Add event listeners to all clickable images
const clickableImages = document.querySelectorAll('.post-image img');
clickableImages.forEach(image => {
    image.addEventListener('click', function() {
        fullImage.src = image.src;
        modal.style.display = 'flex';
    });
});
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// footer 
// current year
document.querySelector('.year').innerHTML = new Date().getFullYear();