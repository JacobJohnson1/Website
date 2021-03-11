'use strict'

function openTab(tabType, tabName) {

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablink[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    tabType.currentTarget.className += " active";

}