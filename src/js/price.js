const priceTop = document.querySelectorAll ('.price_top');
const priceBotttom = document.querySelectorAll ('.price_bottom');

priceTop.forEach(btn => {
    btn.addEventListener('click', e => {
        priceBotttom.forEach(acc => {
            if(e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
            };
        })

        const next = btn.nextElementSibling;
        next.classList.toggle('active');
        btn.classList.toggle('active');
    })
});