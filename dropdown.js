document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.menu');
        const select = dropdown.querySelector('.select');
        const options = dropdown.querySelectorAll('.menu li');

        select.addEventListener('click', (event) => {
            event.stopPropagation();
            menu.classList.toggle('hidden');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                menu.classList.add('hidden');
            }
        });
    });
});