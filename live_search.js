document.querySelector("#search").oninput = function() {
    let val = this.value.trim(); //убираем пробелы, вводимые узером
    let searchItems = document.querySelectorAll('.search-point li');
    if (val != '') {
        document.querySelector(".search-point").classList.add('appear');

        searchItems.forEach(function(elem) {
            if(elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        searchItems.forEach(function(elem) {
            elem.classList.remove('hide');
        });
        document.querySelector(".search-point").classList.remove('appear');
    }
}