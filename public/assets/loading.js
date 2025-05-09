document.addEventListener('DOMContentLoaded', () => {
    const loadingText = document.getElementById('loadingText');
    let percentage = 0;
    const intervalTime = 50; // Update every 50ms

    const interval = setInterval(() => {
        percentage += 1;
        if (percentage <= 100) {
            loadingText.textContent = `${percentage}%`;
        } else {
            clearInterval(interval);
            // Optional: Add any action to perform after loading is complete
            // For example, redirect to another page or hide the loading screen
            // loadingText.textContent = "Done!";
        }
    }, intervalTime);
});
