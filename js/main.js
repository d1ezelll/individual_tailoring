document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('menuButton');
    const header = document.querySelector('.header');
    const headerMenuBottom = document.querySelector('.header-menu-bottom');
  
  
    burgerBtn.addEventListener('click', () => {
        if (header.classList.toggle('open')) {
            burgerBtn.textContent = 'Close menu'
            headerMenuBottom.style.display = "flex";
        } else {
            burgerBtn.textContent = 'Menu';
            headerMenuBottom.style.display = "none";
        };
    })

    window.addEventListener('click', (e) => {
        if (!header.contains(e.target) && !burgerBtn.contains(e.target)) {
            header.classList.remove('open');
            burgerBtn.textContent = 'Menu';
            headerMenuBottom.style.display = "none";
        }
    });
})

document.getElementById('contacts-right-form-button').addEventListener('click', function() {
    document.getElementById('contacts-right-form').reset();
  }
);

document.getElementById('introFormButton').addEventListener('click', function() {
    document.getElementById('introForm').reset();
  }
);