// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    // Mobile Menu Variables
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    let menuOpen = false;

    // Mobile Menu Toggle
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            navbar.classList.add('active');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            navbar.classList.remove('active');
            menuOpen = false;
        }
    });

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navbar.classList.remove('active');
            menuOpen = false;
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.navbar') && 
            !event.target.closest('.menu-btn') && 
            menuOpen) {
            menuBtn.classList.remove('open');
            navbar.classList.remove('active');
            menuOpen = false;
        }
    });

    // Get all elements
    const educBox = document.querySelector('.educ');
    const hobbyBox = document.querySelector('.hobby');
    const infoBox = document.querySelector('.info');
    
    const schoolSection = document.querySelector('.school');
    const hobSection = document.querySelector('.hob');
    const persoSection = document.querySelector('.perso');

    // Get all initial boxes and info sections for easier handling
    const allBoxes = [educBox, hobbyBox, infoBox];
    const allInfoSections = [schoolSection, hobSection, persoSection];

    // Function to show selected info and hide all boxes
    function showInfo(clickedBox, infoSection) {
        // Hide all initial boxes
        allBoxes.forEach(box => {
            box.style.opacity = '0';
            setTimeout(() => {
                box.style.visibility = 'hidden';
            }, 300);
        });
        
        // Hide all info sections first
        allInfoSections.forEach(section => {
            section.style.visibility = 'hidden';
            section.style.opacity = '0';
        });

        // Show the selected info section with a slight delay
        setTimeout(() => {
            infoSection.style.visibility = 'visible';
            infoSection.style.opacity = '1';
            infoSection.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 300);
    }

    // Function to reset everything
    function resetAll() {
        // Show all boxes
        allBoxes.forEach(box => {
            box.style.visibility = 'visible';
            box.style.opacity = '1';
        });
        
        // Hide all info sections
        allInfoSections.forEach(section => {
            section.style.visibility = 'hidden';
            section.style.opacity = '0';
            section.style.transform = 'translate(-50%, -50%) scale(0.95)';
        });
    }

    // Add click handlers
    educBox.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Education clicked');
        showInfo(educBox, schoolSection);
    });

    hobbyBox.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Hobbies clicked');
        showInfo(hobbyBox, hobSection);
    });

    infoBox.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Info clicked');
        showInfo(infoBox, persoSection);
    });

    // Click outside to reset
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.educ') && 
            !event.target.closest('.hobby') && 
            !event.target.closest('.info') && 
            !event.target.closest('.school') && 
            !event.target.closest('.hob') && 
            !event.target.closest('.perso')) {
            console.log('Reset clicked');
            resetAll();
        }
    });
}); 