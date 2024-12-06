document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('dropdown');
    const options = document.querySelectorAll('.dropdown-content li');

    options.forEach(option => {
        option.addEventListener('click', () => {
            dropdown.textContent = option.textContent;
        });
    });

    
})