const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🚀" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "📊" },
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" }
];

export function initSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        skillCard.innerHTML = `
            <span class="text-2xl">${skill.icon}</span>
            <span class="font-medium">${skill.name}</span>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}