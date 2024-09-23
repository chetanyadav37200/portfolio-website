// Function to update the display state of the buttons
function updateButtonDisplay() {
    const sidebar = document.querySelector('.slidebar');
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');

    if (sidebar.classList.contains('slidebarGo')) {
        ham.style.display = 'inline';
        cross.style.display = 'none';
    } else {
        ham.style.display = 'none';
        cross.style.display = 'inline';
    }
}

// Check localStorage to set the initial state of the sidebar
if (localStorage.getItem('sidebarOpen') === 'true') {
    document.querySelector('.slidebar').classList.remove('slidebarGo');
} else {
    document.querySelector('.slidebar').classList.add('slidebarGo');
}

// Initial button display
updateButtonDisplay();

document.querySelector('.ham').addEventListener("click", () => {
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
    localStorage.setItem('sidebarOpen', document.querySelector('.slidebar').classList.contains('slidebarGo'));
    updateButtonDisplay();
});

document.querySelector('.cross').addEventListener("click", () => {
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
    localStorage.setItem('sidebarOpen', document.querySelector('.slidebar').classList.contains('slidebarGo'));
    updateButtonDisplay();
});
