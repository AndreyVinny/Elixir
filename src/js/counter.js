const countres = document.querySelectorAll('.countre'),
      speed = 100000;

countres.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-tager')
        const count =  +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 5)
        } else {

            counter.innerText = target;
        }
    }
    updateCount();
})

    