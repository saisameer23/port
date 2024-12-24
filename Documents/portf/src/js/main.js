import { initDarkMode } from './darkMode.js';
import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initSkills } from './skills.js';
import { initTimeline } from './timeline.js';
import { initContactForm } from './contact.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initNavigation();
    initProjects();
    initSkills();
    initTimeline();
    initContactForm();
});