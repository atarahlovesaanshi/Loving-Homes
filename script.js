// Change Navbar style on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 8%";
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.boxShadow = "none";
    }
});

// Add a smooth fade-in effect to feature items
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.6s ease-out";
    observer.observe(item);
});