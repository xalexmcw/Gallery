var current = document.getElementById('current');
var slike = document.getElementsByClassName('thumb');


for (var i = 0; i < slike.length; i++) {
    slike[i].addEventListener('click', preview);
}

function preview() {
    var imgAttr = this.getAttribute('src');
    current.setAttribute('src', imgAttr);
}