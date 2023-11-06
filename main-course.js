
    // Get references to the content sections and links
    const contentSections = document.querySelectorAll('.content');
    const links = document.querySelectorAll('.nav-link');

    // Add click event listeners to each link
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.id.replace('-link', '-content');
            const targetContent = document.getElementById(targetId);

            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('show');
            });

            // Show the clicked content section
            targetContent.classList.add('show');
        });
    });


    
    // modal part

    document.addEventListener("DOMContentLoaded", function () {
        // Select the "Add Course" button (you need to add an ID to that button)
        const addCourseButton = document.getElementById("addCourseButton");

        // Select the "Add Course" modal (the ID should match the modal's data-bs-target)
        const addCourseModal = new bootstrap.Modal(document.getElementById("addCourseModal"));

        // Add an event listener to the button to open the modal when clicked
        addCourseButton.addEventListener("click", function () {
            addCourseModal.show();
        });
    });
