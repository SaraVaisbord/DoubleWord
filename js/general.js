
function saveToLocalStorage(arr, id) {
    localStorage.setItem(id, JSON.stringify(arr));
}
function loadFromLocalStorage(id) {
    let arr = localStorage.getItem(id);
    return arr ? JSON.parse(arr) : [];
}
function addClick(id, func) {
    let b = document.getElementById(id);
    if (b) {
        b.addEventListener('click', func);
    }
}


