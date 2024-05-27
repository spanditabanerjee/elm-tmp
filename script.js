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
    const secondaryText = heroSection.querySelector('.secondary-text');

    const handleMouseEnter = () => {
        heroSection.classList.add('hover-effect');
        heroH1.textContent = 'Awaken';
        heroP.textContent = 'Get Empowered';
        secondaryText.style.opacity = 1;
    };

    const handleMouseLeave = () => {
        heroSection.classList.remove('hover-effect');
        heroH1.textContent = 'Awaken';
        heroP.textContent = 'The Trader In You';
        secondaryText.style.opacity = 0;
    };

    heroH1.addEventListener('mouseenter', handleMouseEnter);
    heroH1.addEventListener('mouseleave', handleMouseLeave);
    heroP.addEventListener('mouseenter', handleMouseEnter);
    heroP.addEventListener('mouseleave', handleMouseLeave);
});
