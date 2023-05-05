function DarkMode() {
    var element = document.header;
    var element2 = document.main;
    element.classList.toggle("header_dark");
    element2.classList.toggle("main_dark");
}

function DraculaMode() {
    var element = getElementbyId("header");
    var element2 = document.main;
    element.classList.toggle("header_dracula");
    element2.classList.toggle("main_dracula");

}