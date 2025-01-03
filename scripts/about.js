const skills = [
    { name: "JavaScript", icon: "images/icon/js.png" },
    { name: "HTML5", icon: "images/icon/html.png" },
    { name: "CSS3", icon: "images/icon/css.png" },
    { name: "SQL (MySQL)", icon: "images/icon/sql.png" },
    { name: "Responsive Web Design", icon: "images/icon/responsive-web.png" },
    { name: "API Integration", icon: "images/icon/api.png" },
    { name: "Jasmine Framework", icon: "images/icon/jasmine.png" },
    { name: "Git", icon: "images/icon/git.png" },
    { name: "GitHub", icon: "images/icon/github-icon.png" },
    { name: "VS Code", icon: "images/icon/vscode.png" },
    { name: "Chrome DevTools", icon: "images/icon/chrome-dev-tools.png" }
];



const skillsContainer = document.getElementById("skills-container");

skills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const skillImg = document.createElement("img");
    skillImg.src = skill.icon;
    skillImg.alt = skill.name;

    const skillName = document.createElement("p");
    skillName.textContent = skill.name;

    skillDiv.appendChild(skillImg);
    skillDiv.appendChild(skillName);

    skillsContainer.appendChild(skillDiv);
});
