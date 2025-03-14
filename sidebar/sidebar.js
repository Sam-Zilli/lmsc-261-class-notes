// sidebar.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch the sidebar HTML dynamically
    fetch('sidebar/sidebar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load sidebar.html');
            }
            return response.text();
        })
        .then(data => {
            // Insert the fetched sidebar HTML into the container
            document.getElementById('sidebar-container').innerHTML = data;
            console.log('Current Hash:', window.location.hash); 

        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });

    // Dynamically load the CSS for the sidebar
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'sidebar/sidebar.css'; 
    document.head.appendChild(link);
});
