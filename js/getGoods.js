let getGoods = () => {

    let links = document.querySelectorAll('.navigation-link');
    let putLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
    let getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

    let renderData = (goods) => {
        let goodsContainer = document.querySelector('.long-goods-list');
        goodsContainer.innerHTML = "";
        goods.forEach((good) => {
            let goodBlock = document.createElement('div');
            goodBlock.classList.add('col-lg-3');
            goodBlock.classList.add('col-sm-6');

            goodBlock.innerHTML = 
            `
            <div class="goods-card">
            <span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
                <img src="${good.img}" alt="image: ${good.name}" class="goods-image">
                <h3 class="goods-title">${good.name}</h3>
                <p class="goods-description">${good.description}</p>
                <button class="button goods-card-btn add-to-cart" data-id="007">
                    <span class="button-price">$${good.price}</span>
                </button>
            </div>
            `;
            goodsContainer.append(goodBlock);
        });
    }
    let getData = (value,category) => {
        fetch('https://test-9aa22-default-rtdb.firebaseio.com/db.json ')
            .then((res) => res.json())
            .then((data) => {
                let array = category ? data.filter((item) => item[category] === value) : data;
                putLocalStorage('data', array);
                if(window.location.pathname !== "/goods.html" ){
                    window.location.href = "/goods.html";
                }else {
                    renderData(array);
                }
            });
    }

    links.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            let linkValue = el.textContent;
            let category = el.dataset.field;
            getData(linkValue,category);
        });
    })

    if(localStorage.getItem('data') && window.location.pathname === "/goods.html"){
       renderData(getLocalStorage('data'));
    }

}
getGoods();