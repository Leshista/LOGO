const counter = () => {
    const index = document.querySelector('.slide-index');
    const prev = document.querySelector('.slide-prev');
    const next = document.querySelector('.slide-next');

    prev.addEventListener('click', () => {
        index.textContent != 1 ? index.textContent-- : (index.textContent = 4);
    });

    next.addEventListener('click', () => {
        index.textContent != 4 ? index.textContent++ : (index.textContent = 1);
    });
};

export default counter;
