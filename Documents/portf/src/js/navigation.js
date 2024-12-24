export function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Handle mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Handle navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-white/80', 'dark:bg-gray-900/80', 'backdrop-blur-md', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-white/80', 'dark:bg-gray-900/80', 'backdrop-blur-md', 'shadow-lg');
        }
    });
}