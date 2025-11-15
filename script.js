// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('actionBtn');
    const message = document.getElementById('message');
    
    let clickCount = 0;
    
    // Add click event listener to button
    button.addEventListener('click', function() {
        clickCount++;
        
        // Update message based on click count
        if (clickCount === 1) {
            message.textContent = 'Button clicked! Welcome to JavaScript!';
            message.style.color = '#667eea';
        } else {
            message.textContent = `Button clicked ${clickCount} times!`;
            message.style.color = '#764ba2';
        }
        
        // Add a fun animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    });
    
    // Optional: Add some console logging
    console.log('Page loaded successfully!');
});

