// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements if they don't exist
    if (!document.querySelector('.cursor')) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);
    }

    if (!document.querySelector('.cursor-follower')) {
        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'cursor-follower';
        document.body.appendChild(cursorFollower);
    }

    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        if (cursor && cursorFollower) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            // Add slight delay to the follower for a trailing effect
            requestAnimationFrame(() => {
                cursorFollower.style.left = `${e.clientX}px`;
                cursorFollower.style.top = `${e.clientY}px`;
            });
        }
    });

    // Add hover effect on interactive elements
    const interactiveElements = [
        'a', 'button', 'input', 
        'textarea', 'select', 
        '.btn', '.seat:not(.occupied)',
        'label[for]', '[role="button"]',
        '[tabindex]:not([tabindex="-1"])'
    ];

    interactiveElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            // Skip elements that are disabled or have disabled parents
            if (element.disabled || element.closest('[disabled]')) return;

            element.addEventListener('mouseenter', () => {
                cursor?.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor?.classList.remove('hover');
            });
        });
    });

    // Handle click effect
    document.addEventListener('mousedown', () => {
        cursor?.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursor?.classList.remove('click');
    });
});