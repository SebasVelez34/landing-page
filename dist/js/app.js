document.querySelector('.dark-mode').addEventListener('click',changeTheme);

function changeTheme() {
    const dark  = document.querySelectorAll('.dark');
    const light = document.querySelectorAll('.light');
    if (dark.length === 0){
        light.forEach(function(el) {
            el.classList.remove('light');
            el.classList.add('dark');
        });
    }else{
        dark.forEach(function(el) {
            el.classList.remove('dark');
            el.classList.add('light');
        });
    }

}