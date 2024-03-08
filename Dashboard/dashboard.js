// Add your JavaScript code here

// Example JavaScript functionality for selecting tutor or student
document.addEventListener('DOMContentLoaded', function() {
    const tutorRadio = document.getElementById('tutor-radio');
    const studentRadio = document.getElementById('student-radio');
    const tutorForm = document.getElementById('tutor-form');
    const studentForm = document.getElementById('student-form');

    tutorRadio.addEventListener('change', function() {
        if (tutorRadio.checked) {
            tutorForm.style.display = 'block';
            studentForm.style.display = 'none';
        }
    });

    studentRadio.addEventListener('change', function() {
        if (studentRadio.checked) {
            studentForm.style.display = 'block';
            tutorForm.style.display = 'none';
        }
    });
});
