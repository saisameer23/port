const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with cart functionality, user authentication, and payment integration.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team functionality.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
        techStack: ["React", "Firebase", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Weather Dashboard",
        description: "A weather forecasting application with interactive maps and detailed weather information.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
        techStack: ["Vue.js", "OpenWeather API", "D3.js"],
        demoUrl: "#",
        githubUrl: "#"
    }
];

export function initProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.techStack.map(tech => `
                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                <div class="flex space-x-4">
                    <a href="${project.demoUrl}" class="btn-primary text-sm">View Demo</a>
                    <a href="${project.githubUrl}" class="btn-secondary text-sm">GitHub</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}