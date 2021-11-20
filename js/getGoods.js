let getGoods = () => {

    let links = document.querySelectorAll('.navigation-link');
    let putLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
    let getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

    let getData = () => {
        fetch('https://test-9aa22-default-rtdb.firebaseio.com/db.json ')
            .then((res) => res.json())
            .then((data) => {
                putLocalStorage('data', data);
            });
    }

    links.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            getData();
            console.log(e.target)
            console.log(getLocalStorage('data'));
        });
    })

}
getGoods();