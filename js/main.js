// Data for dynamic content
const coursesData = [
    {
        name: "Barista Training",
        description: "Learn the art of coffee making and espresso preparation from industry experts",
        duration: "4 weeks",
        fee: "15,000 NPR",
        image: "assets/images/barista.jpg"
    },
    {
        name: "Bartending",
        description: "Master the skills of mixology, cocktail preparation, and customer service",
        duration: "6 weeks",
        fee: "18,000 NPR",
        image: "assets/images/bartending.jpg"
    },
    {
        name: "Python Programming",
        description: "From basics to advanced Python programming for web and data applications",
        duration: "8 weeks",
        fee: "25,000 NPR",
        image: "assets/images/python.jpg"
    },
    {
        name: "Barber Training",
        description: "Master the techniques of modern haircutting, styling, and traditional straight-edge shaves in a professional shop environment",
        duration: "5 weeks",
        fee: "16,000 NPR",
        image: "assets/images/barber.jpg"
    },
    {
        name: "Basic Home Cooking",
        description: "Learn essential daily cooking skills, dal preparation, vegetable cuts, and basic Nepali/thali dishes",
        duration: "4 weeks",
        fee: "12,000 NPR",
        image: "assets/images/home-cooking.jpg"
    },
    {
        name: "Graphic Design",
        description: "Learn design principles, Adobe Creative Suite, and UI/UX fundamentals",
        duration: "8 weeks",
        fee: "24,000 NPR",
        image: "assets/images/graphic-design.jpg"
    }
];

const projectsData = [
    // Ongoing Projects (first 3)
    {
        title: "Emergency Housing and Reconstruction Project",
        description: "Jointly implemented by MOUD and MOFALD under the financial support of JICA and aims to provide technical assistance in reconstruction of houses in Gorkha and Sindhupalchowk.",
        image: "assets/images/EHRP.jpg",
        category: "Reconstruction"
    },
    {
        title: "Rural Enterprise and Remittance Project (SAMRIDDHI)",
        description: "Implement Vocational Training and Employment Services to 280 Targeted Youths of Dhanusha, Mahottari, Siraha and Bara districts.",
        image: "assets/images/SAMRIDDHI.jpg",
        category: "Vocational"
    },
    {
        title: "EVENT-II Second Round",
        description: "Implementing Result Based Short Term training to 300 participants Tailoring, Building Electrician, Continental Cook and Assistant Beautician in districts Chitwan, Sindhuli and Makwanpur.",
        image: "assets/images/eventii.jpg",
        category: "Skill Development"
    },
    // Completed Projects
    {
        title: "Emergency Peace Support Project/MoPR",
        description: "Contribute to the peace process by providing interim cash transfers and rehabilitation services to eligible conflict affected persons.",
        image: "assets/images/MoPR.jpg",
        category: "Emergency"
    },
    {
        title: "Skills for Employment Project (SEP)",
        description: "ADB funded long term project designed aiming to support in poverty alleviation goal.",
        image: "assets/images/SEP.jpg",
        category: "Vocational"
    },
    {
        title: "GIZ (Support to the Peace Processes)",
        description: "TCN provided skill training to PLAs in the cantonments in division number 1, 3, 4, 6 and 7 for the year 2009/2010 and 2011.",
        image: "assets/images/GIZ.jpeg",
        category: "Vocational"
    }
];

// Hero Carousel Images
const heroImages = [
    "assets/images/hero1.jpg",
    "assets/images/hero2.jpg",
    "assets/images/hero3.jpg",
    "assets/images/hero4.jpg",
    "assets/images/hero5.jpg",
    "assets/images/hero6.jpg",
    "assets/images/hero7.jpg"
];

// DOM Elements
const carouselSlides = document.querySelector('.carousel-slides');
const carouselIndicators = document.querySelector('.carousel-indicators');
const coursesGrid = document.getElementById('courses-grid');
const ongoingProjectsGrid = document.getElementById('ongoing-projects');
const completedProjectsGrid = document.getElementById('completed-projects');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderCourses();
    renderProjects();
    initMobileMenu();
    initButtons();
    initSocialLinks();
    checkImages(); // Optional: remove after testing
});

// Carousel Functionality
function initCarousel() {
    let currentIndex = 0;
    let intervalId;

    // Create slides
    heroImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${image}" alt="Hero background ${index + 1}">`;
        carouselSlides.appendChild(slide);

        // Create indicator
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to image ${index + 1}`);
        dot.addEventListener('click', () => {
            clearInterval(intervalId);
            goToSlide(index);
            startAutoPlay();
        });
        carouselIndicators.appendChild(dot);
    });

    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    function goToSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function startAutoPlay() {
        intervalId = setInterval(nextSlide, 3000);
    }

    // Start autoplay
    startAutoPlay();

    // Pause on hover
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
    carousel.addEventListener('mouseleave', startAutoPlay);
}

// Render Courses
function renderCourses() {
    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.name}">
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.name}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-details">
                    <div class="course-detail">
                        <div class="detail-label">Duration</div>
                        <div class="detail-value">${course.duration}</div>
                    </div>
                    <div class="course-detail">
                        <div class="detail-label">Fee</div>
                        <div class="detail-value kesari">${course.fee}</div>
                    </div>
                </div>
                <button class="course-btn">Register Now</button>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
}

// Render Projects
function renderProjects() {
    // Ongoing projects (first 3)
    projectsData.slice(0, 3).forEach(project => {
        const projectCard = createProjectCard(project);
        ongoingProjectsGrid.appendChild(projectCard);
    });

    // Completed projects (last 3)
    projectsData.slice(3).forEach(project => {
        const projectCard = createProjectCard(project);
        completedProjectsGrid.appendChild(projectCard);
    });
}

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <span class="project-category">${project.category}</span>
        </div>
        <div class="project-content">
            <h4 class="project-title">${project.title}</h4>
            <p class="project-description">${project.description}</p>
            <button class="project-btn">Learn More</button>
        </div>
    `;
    
    return card;
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle - Enhanced Version
function initMobileMenu() {
    const nav = document.querySelector('.main-nav');
    const bottomRow = document.querySelector('.bottom-row');
    
    // Remove existing mobile menu button if any
    const existingBtn = document.querySelector('.mobile-menu-btn');
    if (existingBtn) existingBtn.remove();
    
    // Only create for mobile screens
    if (window.innerWidth <= 768) {
        // Create hamburger button
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-btn';
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        menuButton.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Insert button before nav
        bottomRow.insertBefore(menuButton, nav);
        
        // Toggle menu on button click
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('show');
            
            // Toggle icon between hamburger and close
            const icon = this.querySelector('i');
            if (nav.classList.contains('show')) {
                icon.className = 'fas fa-times';
                // Prevent body scrolling when menu is open
                document.body.style.overflow = 'hidden';
            } else {
                icon.className = 'fas fa-bars';
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('show');
                document.body.style.overflow = '';
                const icon = menuButton.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.main-nav') && 
                !event.target.closest('.mobile-menu-btn') && 
                nav.classList.contains('show')) {
                nav.classList.remove('show');
                document.body.style.overflow = '';
                const icon = menuButton.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Reset on resize
    window.addEventListener('resize', function() {
        const currentBtn = document.querySelector('.mobile-menu-btn');
        if (window.innerWidth > 768) {
            // Desktop view - remove mobile menu if exists
            if (currentBtn) currentBtn.remove();
            nav.classList.remove('show');
            document.body.style.overflow = '';
        } else {
            // Mobile view - recreate if button doesn't exist
            if (!document.querySelector('.mobile-menu-btn')) {
                initMobileMenu();
            }
        }
    });
}

// Call the function
initMobileMenu();




// Page-specific rendering
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on
    const path = window.location.pathname;
    
    if (path.includes('courses.html')) {
        // Render all courses on courses page
        const allCoursesGrid = document.getElementById('all-courses-grid');
        if (allCoursesGrid) {
            coursesData.forEach(course => {
                const courseCard = createCourseCard(course);
                allCoursesGrid.appendChild(courseCard);
            });
        }
    }
    
    if (path.includes('projects.html')) {
        // Render all projects on projects page
        const ongoingGrid = document.getElementById('all-ongoing-projects');
        const completedGrid = document.getElementById('all-completed-projects');
        
        if (ongoingGrid) {
            projectsData.slice(0, 3).forEach(project => {
                ongoingGrid.appendChild(createProjectCard(project));
            });
        }
        
        if (completedGrid) {
            projectsData.slice(3).forEach(project => {
                completedGrid.appendChild(createProjectCard(project));
            });
        }
    }
});

// Helper function to create course card (extracted from renderCourses)
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    card.innerHTML = `
        <div class="course-image">
            <img src="${course.image}" alt="${course.name}">
        </div>
        <div class="course-content">
            <h3 class="course-title">${course.name}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-details">
                <div class="course-detail">
                    <div class="detail-label">Duration</div>
                    <div class="detail-value">${course.duration}</div>
                </div>
                <div class="course-detail">
                    <div class="detail-label">Fee</div>
                    <div class="detail-value kesari">${course.fee}</div>
                </div>
            </div>
            <button class="course-btn">Register Now</button>
        </div>
    `;
    
    return card;
}

// Make all "Register Now" buttons functional
function initButtons() {
    // Google Forms link for registrations
    const registrationFormUrl = 'https://forms.gle/ebEE8nY5ZvGor6yj7'; // Replace with your actual Google Forms link
    
    document.addEventListener('click', function(e) {
        // Course registration buttons - redirect directly to Google Forms
        if (e.target.classList.contains('course-btn')) {
            const courseCard = e.target.closest('.course-card');
            const courseTitle = courseCard.querySelector('.course-title').textContent;
            
            // Optional: You can pass course name to Google Forms via URL parameters
            // For example: `${registrationFormUrl}?course=${encodeURIComponent(courseTitle)}`
            window.open(registrationFormUrl, '_blank');
        }
        
        // Project "Learn More" buttons - redirect to contact page directly
        if (e.target.classList.contains('project-btn')) {
            window.location.href = 'contact.html';
        }
        
        // "View All Courses" button
        if (e.target.classList.contains('btn-secondary') && e.target.textContent.includes('View All Courses')) {
            window.location.href = 'courses.html';
        }
        
        // "View All Projects" button
        if (e.target.classList.contains('btn-primary') && e.target.textContent.includes('View All Projects')) {
            window.location.href = 'projects.html';
        }
        
        // "Explore Courses" button in hero
        if (e.target.classList.contains('btn-primary') && e.target.textContent.includes('Explore Courses')) {
            window.location.href = 'courses.html';
        }
    });
}

// Call this in DOMContentLoaded
initButtons();


// Social Media Links with Confirmation
function initSocialLinks() {
    const socialUrls = {
        instagram: 'https://www.facebook.com/profile.php?id=100063595869401',
        facebook: 'https://www.facebook.com/profile.php?id=100063595869401',
        twitter: 'https://www.facebook.com/profile.php?id=100063595869401',
        linkedin: 'https://www.facebook.com/profile.php?id=100063595869401'
    };
    
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            const social = this.dataset.social;
            const url = socialUrls[social];
            const platform = social.charAt(0).toUpperCase() + social.slice(1);
            
            if (confirm(`You are about to leave this site and visit ${platform}. Continue?`)) {
                window.open(url, '_blank');
            }
        });
    });
}

// Call in DOMContentLoaded
initSocialLinks();