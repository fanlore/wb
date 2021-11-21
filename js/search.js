let search = () => {
    let input = document.querySelector('.search-block > input');
    let searchBtn = document.querySelector('.search-block > button');

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

    let getData = (value) => {
        fetch('https://test-9aa22-default-rtdb.firebaseio.com/db.json ')
            .then((res) => res.json())
            .then((data) => {
                let array = data.filter((good) => good.name.toLowerCase().includes(value.toLowerCase()));
                localStorage.setItem('data',JSON.stringify(array))
                if(window.location.pathname !== "/goods.html" ){
                    window.location.href = "/goods.html";
                }else {
                    renderData(array);
                }
            });
    }

    searchBtn.addEventListener('click', (e) => {
        getData(input.value);
    });

}

search();