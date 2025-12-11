// ================================
// SMOOTH SCROLLING FOR RIGHT NAV
// ================================
document.querySelectorAll('.hero-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// =======================================
// ACTIVE SECTION HIGHLIGHT ON RIGHT NAV
// =======================================
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const top = section.getBoundingClientRect().top;

        const navItem = document.querySelector(`.hero-btn[href="#${id}"]`);
        if (navItem) {
            if (top < window.innerHeight / 2 && top > -section.offsetHeight / 2) {
                document.querySelectorAll('.hero-btn').forEach(btn => btn.classList.remove('active'));
                navItem.classList.add('active');
            }
        }
    });
});


// =======================================
// RIGHT NAV HOVER ANIMATION
// =======================================
document.querySelectorAll('.right-side .section-tag a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.color = '#A596F4'; // purple glow
        icon.style.transform = 'translateX(-8px)';
        icon.style.transition = '0.3s ease';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.color = '#fff';
        icon.style.transform = 'translateX(0)';
        icon.style.transition = '0.3s ease';
    });
});


// =======================================
// FOOTER LOGO APPEARS AFTER HERO SECTION
// =======================================
window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector("#about");
    const fixedImg = document.querySelector("#fixedimg");

    const aboutTop = aboutSection.getBoundingClientRect().top;

    if (aboutTop <= 50) {
        fixedImg.classList.add("show");
    } else {
        fixedImg.classList.remove("show");
    }
});
window.addEventListener("scroll ", () => {
    const aboutSection = document.querySelector("#about ");
    const fixedImg = document.querySelector("#fixedimg ");

    const aboutTop = aboutSection.getBoundingClientRect().top;

    if (aboutTop <= 50) {
        fixedImg.classList.add("show ");
    } else {
        fixedImg.classList.remove("show ");
    }
});
// Toggle hamburger menu
const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});