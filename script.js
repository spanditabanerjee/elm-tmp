document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero');
    const heroH1 = heroSection.querySelector('h1');
    const heroP = heroSection.querySelector('p');

    heroSection.addEventListener('mouseenter', () => {
        heroH1.textContent = 'Awaken';
        heroP.textContent = 'Get Empowered';
    });

    heroSection.addEventListener('mouseleave', () => {
        heroH1.textContent = 'Awaken';
        heroP.textContent = 'The Trader In You';
    });
});
