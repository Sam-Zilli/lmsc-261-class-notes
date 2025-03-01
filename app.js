<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LMSC-261 Class Notes</title>
    
    <!-- Bootstrap CSS (Bootstrap 5 CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Your custom styles (update path accordingly) -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Container for sidebar and main content -->
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <div id="sidebar-container" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar p-3">
                <!-- Sidebar content will be dynamically injected here -->
            </div>

            <!-- Main Content -->
            <div class="col-md-9 col-lg-10 main-content">
                <!-- Default Content (can be replaced dynamically) -->
                <div id="content-placeholder">
                    <h1>Welcome</h1>
                    <p>Select a topic from the sidebar to begin.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Load Sidebar.js -->
    <script src="sidebar/sidebar.js"></script>    
    
    <!-- Main Application JS -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Fetch and load sidebar content dynamically
            fetch('sidebar/sidebar.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('sidebar-container').innerHTML = data;
                    loadContent(); // Load content when sidebar is loaded
                })
                .catch(error => {
                    console.error('Error loading sidebar:', error);
                });

            // Function to load content based on the current URL hash
            function loadContent() {
                const contentPlaceholder = document.getElementById('content-placeholder');
                const hash = window.location.hash;

                // Clear the content placeholder
                contentPlaceholder.innerHTML = '';

                switch (hash) {
                    case '#/common-errors':
                        contentPlaceholder.innerHTML = `
                            <h1>Common Errors</h1>
                            <p>This section covers common JavaScript errors.</p>
                        `;
                        break;
                    case '#/terminal':
                        contentPlaceholder.innerHTML = `
                            <h1>Terminal Commands</h1>
                            <p>This section explains useful terminal commands.</p>
                        `;
                        break;
                    case '#/javascript/section1':
                        contentPlaceholder.innerHTML = `
                            <h1>JavaScript Section 2.1</h1>
                            <p>This section covers the basics of JavaScript variables.</p>
                        `;
                        break;
                    case '#/javascript/section2':
                        contentPlaceholder.innerHTML = `
                            <h1>JavaScript Section 2.2</h1>
                            <p>This section dives deeper into JavaScript functions.</p>
                        `;
                        break;
                    case '#/html-css/section1':
                        contentPlaceholder.innerHTML = `
                            <h1>HTML & CSS Section 3.1</h1>
                            <p>This section introduces the basics of HTML and CSS.</p>
                        `;
                        break;
                    case '#/html-css/section2':
                        contentPlaceholder.innerHTML = `
                            <h1>HTML & CSS Section 3.2</h1>
                            <p>This section dives deeper into advanced HTML and CSS.</p>
                        `;
                        break;
                    default:
                        contentPlaceholder.innerHTML = `
                            <h1>Welcome</h1>
                            <p>Select a topic from the sidebar to begin.</p>
                        `;
                }
            }

            // Listen to URL hash changes and load new content dynamically
            window.addEventListener('hashchange', loadContent);

            // Initial content load based on the current hash
            loadContent();
        });
    </script>

    <!-- Bootstrap JS (and Popper.js) -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
</body>
</html>
