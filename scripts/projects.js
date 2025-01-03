const projects = [
    { 
        img: "images/projects/project-1.png", 
        title: "Amazon Clone", 
        description: "A replica of Amazon's online store, showcasing product listings, a shopping cart, and a checkout process.", 
        link: "https://rafiframadhana.github.io/amazon-clone/" 
    },
    { 
        img: "images/projects/project-2.png", 
        title: "Rock Paper Scissors", 
        description: "A classic Rock, Paper, Scissors game where users can play against the computer.", 
        link: "https://rafiframadhana.github.io/Rock-Paper-Scissors-Game/" 
    },
    { 
        img: "images/projects/project-3.png", 
        title: "Clothing Store", 
        description: "A basic online clothing store for Bray Surfing, showcasing product listings and allowing users to browse through available items.", 
        link: "https://rafiframadhana.github.io/Bray-Surfing-Clothing-Store/" 
    },
    { 
        img: "images/projects/project-4.png", 
        title: "Calculator", 
        description: "A simple calculator that supports basic arithmetic operations like addition, subtraction, multiplication, and division.", 
        link: "https://rafiframadhana.github.io/Calculator/" 
    },
    { 
        img: "images/projects/project-5.png", 
        title: "To do List", 
        description: "A to-do list application that allows users to add, edit, and delete tasks to stay organized.", 
        link: "https://rafiframadhana.github.io/To-do-List/" 
    },
    { 
        img: "images/projects/project-6.png", 
        title: "Youtube Clone", 
        description: "A simple YouTube clone, featuring a basic layout with video thumbnails, titles, and a functional video player.", 
        link: "https://rafiframadhana.github.io/youtube-clone/" 
    }
    
];


const projectsContainer = document.getElementById("projects-container");


projects.forEach(project => {
    const projectCard = `
        <div class="col-lg-4 col-md-6">
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
    projectsContainer.innerHTML += projectCard;
});

