// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

// Check localStorage for dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Event listener for dark mode toggle button
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Workout Completion Tracking
const completedCheckboxes = document.querySelectorAll('.completed');

// Function to mark exercise as completed
function markCompleted(checkbox) {
    const exerciseId = checkbox.getAttribute('data-exercise');
    const row = checkbox.parentElement.parentElement;

    if (checkbox.checked) {
        row.classList.add('completed-row');
        localStorage.setItem(exerciseId, 'completed');
    } else {
        row.classList.remove('completed-row');
        localStorage.removeItem(exerciseId);
    }
}

// Load completed exercises from localStorage on page load
completedCheckboxes.forEach(checkbox => {
    const exerciseId = checkbox.getAttribute('data-exercise');
    if (localStorage.getItem(exerciseId) === 'completed') {
        checkbox.checked = true;
        checkbox.parentElement.parentElement.classList.add('completed-row');
    }

    // Add event listener to each checkbox
    checkbox.addEventListener('change', () => {
        markCompleted(checkbox);
    });
});
