const skills = [
    { name: "Next.js", icon: "images/icon/nextjs.png" },
    { name: "React", icon: "images/icon/react.png" },
    { name: "TypeScript", icon: "images/icon/typescript.png" },
    { name: "JavaScript", icon: "images/icon/js.png" },
    { name: "HTML5", icon: "images/icon/html.png" },
    { name: "CSS3", icon: "images/icon/css.png" },
    { name: "SQL (MySQL)", icon: "images/icon/sql.png" },
    { name: "Redux Toolkit", icon: "images/icon/redux-toolkit.png" },
    { name: "Zustand", icon: "images/icon/zustand.png" },
    { name: "React Router", icon: "images/icon/react-router.png" },
    { name: "Tailwind CSS", icon: "images/icon/tailwind-css.png" },
    { name: "Material UI", icon: "images/icon/material-ui.png" },
    { name: "Chakra UI", icon: "images/icon/chakra-ui.png" },
    { name: "Vercel", icon: "images/icon/vercel.png" },
    { name: "Netlify", icon: "images/icon/netlify.png" },
    { name: "Vite", icon: "images/icon/vite.png" },
    { name: "npm", icon: "images/icon/npm.png" },
    { name: "ESLint", icon: "images/icon/eslint.png" },
    { name: "Prettier", icon: "images/icon/prettier.png" },
    { name: "API Integration", icon: "images/icon/api.png" },
    { name: "Jasmine", icon: "images/icon/jasmine.png" },
    { name: "Git", icon: "images/icon/git.png" },
    { name: "GitHub", icon: "images/icon/github-icon.png" },
    { name: "VS Code", icon: "images/icon/vscode.png" },
    { name: "Figma", icon: "images/icon/figma.png" },
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
