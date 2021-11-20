let cart = () => {
    let cartBtn = document.querySelector('.button-cart');
    let cartModal = document.getElementById('modal-cart');
    let cartClose = document.querySelector('.modal-close');
    
    cartBtn.addEventListener('click', () => cartModal.style.display = 'flex');
    cartClose.addEventListener('click', () => cartModal.style.display = '');
}

cart();