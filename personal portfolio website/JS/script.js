document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check');
    const navMenu = document.querySelector('nav ul');
    const burgerIcon = document.querySelector('.chackbtn');
    const navLinks = document.querySelectorAll('nav ul li a');
    const cvButton = document.getElementById('cv-btn'); 
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    burgerIcon.addEventListener('click', () => {
        checkBtn.checked = !checkBtn.checked; 
        navMenu.style.left = checkBtn.checked ? '0' : '-100%'; 
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !burgerIcon.contains(e.target) && checkBtn.checked) {
            checkBtn.checked = false; 
            navMenu.style.left = '-100%';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            checkBtn.checked = false; 
            navMenu.style.left = '-100%'; 
        });
    });

    if (cvButton) {
        cvButton.addEventListener('click', () => {
            checkBtn.checked = false; 
            navMenu.style.left = '-100%'; 
        });
    }

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


function loadSkills() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);

    console.log('Form submitted with data:', Object.fromEntries(formData));

    alert('Thank you for your message! I will get back to you soon.');
    this.reset(); 
});
