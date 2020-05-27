var selectElem = document.getElementById('course');
var btn = document.getElementById('checkPage');
var index;
var url = "https://www.google.ca"

// When a new <option> is selected
selectElem.addEventListener('change', function () {
    index = selectElem.selectedIndex;
});

btn.addEventListener('click', function () {
    if (index == 3) {
        url = "https://drive.google.com/file/d/1u2ei7vTdJA8Sr5o_RuXfJediNoW1eoWm/view?usp=sharing";
    }
    window.open(url);
});



