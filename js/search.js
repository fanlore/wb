let search = () => {
    let input = document.querySelector('.search-block > input');
    let searchBtn = document.querySelector('.search-block > button');

    searchBtn.addEventListener('click', (e) => {
        console.log(input.value);
    });
}

search();