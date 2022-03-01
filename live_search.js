// Вывод JSON данных в HTML
$(document).ready(function () {
    let arrayDataProvider = getJsonAsArray();
    $.each(arrayDataProvider, function(key, vall) {
    let room = vall.room;
    let description = vall.description;

    let $template = $('.table-template:first').clone().appendTo('.search-point');
    $template.find($('.room')).append('<span>' + room + '</span>');
    $template.find($('.description')).append('<span>' + description + '</span>');
    });
})

function getJsonAsArray() {
    return JSON.parse(`[
        {
            "room": "",
            "description": ""
        },
        {
            "room": "203",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "204",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "Деканат",
            "description": ""
        },
        {
            "room": "205",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "207",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "208",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "209",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "210",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "211",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "212",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "213",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "215",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "216",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "219",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "220",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "315",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "221",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "222",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "222а",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "Туалет",
            "description": ""
        },
        {
            "room": "Кладовая",
            "description": ""
        },
        {
            "room": "225",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "226",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "227",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "227а",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "228",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "229",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "230",
            "description": "1 корпус - 2 этаж"
        },
        {
            "room": "231",
            "description": "1 корпус - 2 этаж"
        }
    ]`);
}

let searchShower = document.querySelector(".search-point");
// let dataToAppear = document.querySelector(".table-template");
document.querySelector("#search").oninput = function() {
    let val = this.value.trim(); //убираем пробелы, вводимые узером
    let searchItems = document.querySelectorAll('.table-template li');
    if (val != '') {
        searchShower.classList.add('searchShower');
        // dataToAppear.classList.add('appear');

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
    }
}

let duaLipa = document.querySelectorAll("body > .search-point > .table-template > li > .room > span:nth-child(3)");
console.log(duaLipa);

// $(document).ready(function () {
//     $.ajax( {
//         url: "data.json",
//         type: "GET",
//         contentType: "application/json; charset=utf-8",
//         async: true,
//         dataType: "json",
//         success: function () {
//         }
//     });
// })