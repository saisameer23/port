const timelineEvents = [
    {
        year: "2023",
        title: "Senior Full Stack Developer",
        company: "Tech Innovators Inc.",
        description: "Leading development of enterprise applications"
    },
    {
        year: "2021",
        title: "Full Stack Developer",
        company: "Digital Solutions Ltd.",
        description: "Developed and maintained multiple client projects"
    },
    {
        year: "2019",
        title: "Frontend Developer",
        company: "Web Creators Co.",
        description: "Specialized in responsive web applications"
    }
];

export function initTimeline() {
    const timeline = document.getElementById('timeline');
    
    timelineEvents.forEach((event, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'relative pl-8 border-l-2 border-blue-500';
        
        timelineItem.innerHTML = `
            <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div class="mb-1 text-sm text-blue-600 dark:text-blue-400 font-semibold">
                ${event.year}
            </div>
            <h4 class="text-lg font-semibold mb-1">${event.title}</h4>
            <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                ${event.company}
            </div>
            <p class="text-gray-600 dark:text-gray-300">
                ${event.description}
            </p>
        `;
        
        timeline.appendChild(timelineItem);
    });
}