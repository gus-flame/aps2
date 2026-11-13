if (localStorage.getItem('tema') === 'claro') {
    document.body.classList.add('tema-claro');
}
const btnTema = document.querySelector('#btn-tema');
if (btnTema) {
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('tema-claro');
        if (document.body.classList.contains('tema-claro')) {
            localStorage.setItem('tema', 'claro');
        } else {
            localStorage.setItem('tema', 'escuro');
        }
    });
}