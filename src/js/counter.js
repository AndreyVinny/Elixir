const countres = document.querySelectorAll('.countre'),
         speed = 2000;

countres.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-tager')
        const count =  +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1)
        } else {
            counter.innerText = target;
        }
    }

    let block = document.querySelector('.counter_cont')
    function check () {
    if(block.classList.contains('_active') == true)
        updateCount()
    }

        setInterval (check, 1500)
})
    