const questionTop = document.querySelectorAll ('.questions_top');
const questionBotttom = document.querySelectorAll ('.questions_bottom');

questionTop.forEach(btn => {
    btn.addEventListener('click', e => {
        questionBotttom.forEach(acc => {
            if(e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
                acc.classList.remove('active');
                questionTop.forEach(btn => btn.classList.remove('active'));
            };
        })

        const next = btn.nextElementSibling;
        next.classList.toggle('active');
        btn.classList.toggle('active');
    })
});