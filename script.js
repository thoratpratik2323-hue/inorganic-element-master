document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.app-view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-view');

            // Nav update
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // View switching
            views.forEach(view => {
                if (view.id === `view-${target}`) {
                    view.style.display = 'block';
                    view.style.opacity = '0';
                    view.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        view.style.opacity = '1';
                        view.style.transform = 'translateY(0)';
                        view.style.transition = 'all 0.4s ease';
                    }, 50);
                } else {
                    view.style.display = 'none';
                }
            });

            // Re-render MathJax
            if (window.MathJax) {
                window.MathJax.typesetPromise();
            }
        });
    });
});
