// About Section

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");
    const skillsIcons = document.querySelectorAll(".skill");

    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(aboutSection);

    skillsIcons.forEach(skill => observer.observe(skill));

    const skillsContainer = document.getElementById("skills-container");

    const observerForSkills = new MutationObserver(() => {
        document.querySelectorAll(".skill").forEach(skill => observer.observe(skill));
    });

    observerForSkills.observe(skillsContainer, { childList: true });
});




//Projects Section

document.addEventListener("DOMContentLoaded", function () {
    const projectsSection = document.getElementById("projects");
    const projectCards = document.querySelectorAll(".project-card");

    const observerOptions = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(projectsSection);

    projectCards.forEach(card => observer.observe(card));

    const projectsContainer = document.getElementById("projects-container");

    const observerForProjects = new MutationObserver(() => {
        document.querySelectorAll(".project-card").forEach(card => observer.observe(card));
    });

    observerForProjects.observe(projectsContainer, { childList: true });
});



//Certifications Sections

document.addEventListener("DOMContentLoaded", function () {
    const certificationsSection = document.getElementById("certifications");
    const certBoxes = document.querySelectorAll(".cert-box");

    const observerOptions = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(certificationsSection);

    certBoxes.forEach(cert => observer.observe(cert));

    const certContainer = document.getElementById("certifications-container");

    const observerForCerts = new MutationObserver(() => {
        document.querySelectorAll(".cert-box").forEach(cert => observer.observe(cert));
    });

    observerForCerts.observe(certContainer, { childList: true });
});



//Contact Section

document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
});

