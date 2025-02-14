const projects = [
    { 
        img: "images/projects/project-1.png", 
        title: "Amazon Clone", 
        description: "A replica of Amazon's online store, showcasing product listings, a shopping cart, and a checkout process.", 
        link: "https://rafiframadhana.github.io/amazon-clone/" 
    },
    { 
        img: "images/projects/project-2.png", 
        title: "Weather App", 
        description: "A weather web application that allows users to check the current weather by searching for a specific city.", 
        link: "https://rafiframadhana.github.io/Weather-App/" 
    },
    { 
        img: "images/projects/project-3.png", 
        title: "Rock Paper Scissors", 
        description: "A classic Rock, Paper, Scissors game where users can play against the computer.", 
        link: "https://rafiframadhana.github.io/Rock-Paper-Scissors-Game/" 
    },
    { 
        img: "images/projects/project-4.png", 
        title: "Clothing Store", 
        description: "A basic online clothing store for Bray Surfing, showcasing product listings and allowing users to browse through available items.", 
        link: "https://rafiframadhana.github.io/Bray-Surfing-Clothing-Store/" 
    },
    { 
        img: "images/projects/project-5.png", 
        title: "Calculator", 
        description: "A simple calculator that supports basic arithmetic operations like addition, subtraction, multiplication, and division.", 
        link: "https://rafiframadhana.github.io/Calculator/" 
    },
    { 
        img: "images/projects/project-6.png", 
        title: "To do List", 
        description: "A to-do list application that allows users to add, edit, and delete tasks to stay organized.", 
        link: "https://rafiframadhana.github.io/To-do-List/" 
    },
    { 
        img: "images/projects/project-7.png", 
        title: "Number Guessing Game", 
        description: "A game where the player guesses a randomly generated number, with feedback on whether the guess is too high or low.", 
        link: "https://rafiframadhana.github.io/Number-Guessing-Game/" 
    },
    { 
        img: "images/projects/project-8.png", 
        title: "Password Generator", 
        description: "Generates customizable random passwords with options for length and character types (letters, numbers, symbols).", 
        link: "https://rafiframadhana.github.io/Password-Generator/" 
    },
    { 
        img: "images/projects/project-9.png", 
        title: "Temperature Conversion", 
        description: "Converts temperatures between Celsius, Fahrenheit, and Kelvin.", 
        link: "https://rafiframadhana.github.io/Temperature-conversion/" 
    },
    { 
        img: "images/projects/project-10.png", 
        title: "Dice Roller Game", 
        description: "Simulates rolling one or more dice and displays the results visually.", 
        link: "https://rafiframadhana.github.io/Dice-Roller-Game/" 
    },
    { 
        img: "images/projects/project-11.png", 
        title: "Stopwatch", 
        description: "A minimalist stopwatch with start, stop, and reset functions, designed with a modern interface.", 
        link: "https://rafiframadhana.github.io/Stopwatch/" 
    },
    { 
        img: "images/projects/project-12.png", 
        title: "Youtube Clone", 
        description: "A simple YouTube clone, featuring a basic layout with video thumbnails, titles, and a functional video player.", 
        link: "https://rafiframadhana.github.io/youtube-clone/" 
    },
    
];


const projectsContainer = document.getElementById("projects-container");

function getInitialProjectsCount() {
    return window.innerWidth <= 991 ? 4 : 6;
}

let initialProjects = getInitialProjectsCount();

function loadProjects() {
    let html = "";
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        html += `
            <div class="col-lg-4 col-md-6 project-item" style="${i < initialProjects ? '' : 'display: none;'}">
                <a href="${project.link}" target="_blank" class="project-link">
                    <div class="project-card">
                        <img src="${project.img}" alt="${project.title}">
                        <div class="project-info">
                            <h5>${project.title}</h5>
                            <p>${project.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }
    projectsContainer.innerHTML = html;

    if (projects.length <= initialProjects) {
        document.getElementById("load-more-projects-btn").style.display = "none";
    }
}

function showAllProjects() {
    document.querySelectorAll(".project-item").forEach(item => {
        item.style.display = "block";
    });
    document.getElementById("load-more-projects-btn").style.display = "none";
}

loadProjects();

const loadMoreProjectsButton = document.createElement("button");
loadMoreProjectsButton.id = "load-more-projects-btn";
loadMoreProjectsButton.textContent = "Load More";
loadMoreProjectsButton.className = "btn btn-primary mt-3";
loadMoreProjectsButton.addEventListener("click", showAllProjects);

projectsContainer.insertAdjacentElement("afterend", loadMoreProjectsButton);

window.addEventListener("resize", () => {
    let newInitialProjects = getInitialProjectsCount();
    if (newInitialProjects !== initialProjects) {
        initialProjects = newInitialProjects;
        loadProjects();
    }
});








