// Function to get ID from URL
function getIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
// همچین کدی لارم داری که ایدی رو از api  بگیری 
// Function to get ID from URL
function getIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to get blog details by ID
async function getBlogDetail(id) {
    const response = await fetch(`https://nextjs-boilerplate-five-psi-45.vercel.app/api/blogs/${id}`);

    if (response.ok) {
        const blogDetail = await response.json();
        return blogDetail;
    } else {
        console.log('Something went wrong when fetching blog details!');
    }
}

// Function to display blog details
function displayBlogDetail(id) {
    getBlogDetail(id).then((blog) => {
        console.log('blog detail :>>', blog);
        const detail_container = document.getElementById('blog_detail_container');
        
        if (blog) {
            detail_container.innerHTML = `
                <div class="blog-detail">
                    <img src="${blog.featured_image}" alt="${blog.title}">
                    <h1>${blog.title}</h1>
                    <h3>${blog.subtitle}</h3>
                    <div class="blog-info">
                        <p>Author: ${blog.author}</p>
                        <p>Published: ${new Date(blog.created_at).toLocaleDateString()}</p>
                    </div>
                    <div class="blog-content">
                        ${blog.content}
                    </div>
                    <p>Tags: ${blog.tags.join(', ')}</p>
                </div>
            `;
        } else {
            detail_container.innerHTML = '<p>Blog not found</p>';
        }
    }).catch(error => {
        console.error('Error fetching blog detail:', error);
        document.getElementById('blog_detail_container').innerHTML = 
            '<p>Failed to load blog details. Please try again later.</p>';
    });
}