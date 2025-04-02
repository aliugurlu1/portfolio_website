document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const projectCards = document.querySelectorAll('.project-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const platform = tab.getAttribute('data-platform');

            // Show all projects if 'all' is selected, otherwise filter by platform
            projectCards.forEach(card => {
                if (platform === 'all' || card.getAttribute('data-platform') === platform) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});