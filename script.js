const dynamicText = document.querySelector('.dynamic-text');
        const phrases = [
            'successful brand.',
            'thriving business.',
            'beautiful logo.',
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isTyping = true;

        function type() {
            const currentPhrase = phrases[wordIndex];
            
            if (isTyping) {
                dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentPhrase.length) {
                    setTimeout(() => {
                        dynamicText.classList.add('highlight');
                        setTimeout(() => {
                            dynamicText.textContent = '';
                            dynamicText.classList.remove('highlight');
                            wordIndex = (wordIndex + 1) % phrases.length;
                            charIndex = 0;
                            type();
                        }, 800); // Duration of highlight before removal
                    }, 3000); // Wait time before highlighting
                    return;
                }
            }

            setTimeout(type, 200); // Typing speed
        }

        // Start the typing animation
        setTimeout(type, 1000);




// active link 
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav_options');

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});





async function sendRequest() {
    const response = await fetch('https://nextjs-boilerplate-five-psi-45.vercel.app/api/blogs?page=1&limit=8');

    if (response.ok) {
        const apiResult = await response.json();
        return apiResult;
    } else {
        console.log('Something went wrong!');
    }
} 

sendRequest().then((apiData) => {
    console.log('apiData :>>', apiData);
    const blog_content = document.getElementById('blog_container');
    blog_content.innerHTML = ''; // Clear previous content

    apiData.blogs.slice(0,8).forEach(blog => {
        const blog_preview = document.createElement('div');
        blog_preview.className = 'blogsContent';

        blog_preview.innerHTML = `
            <img src="${blog.featured_image}" alt="${blog.title}">
            <h2>${blog.title}</h2>
            <p>${blog.subtitle}</p>
            <p>${blog.summary}</p>
        `;
        
        blog_content.appendChild(blog_preview); // Append each blog preview to the container
    });
    
});


























