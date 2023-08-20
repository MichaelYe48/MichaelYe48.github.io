var arr = [
    'arc.JPG',
    'eiffel.JPG',
    'gardens.JPG',
    'Lindenhof.JPG',
    'lisa.JPG',
    'mirrors.JPG',
    'Quaibrucke.JPG'
]


function rand_img_gen() {
    idx = Math.floor(Math.random() * arr.length);
    var show = arr[idx];
    document.getElementById('rand_img').src = `./images/${show}`;
}

setInterval(rand_img_gen, 7000);