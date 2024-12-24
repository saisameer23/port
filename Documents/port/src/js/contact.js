export function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to a server
        // For demo purposes, we'll just log it
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Message sent successfully!');
        form.reset();
    });
}