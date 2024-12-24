export function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true' || 
        (!localStorage.getItem('darkMode') && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }

    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        moonIcon.classList.toggle('hidden');
        sunIcon.classList.toggle('hidden');
        
        localStorage.setItem('darkMode', 
            document.documentElement.classList.contains('dark'));
    });
}