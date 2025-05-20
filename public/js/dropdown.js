function myFunction(){
    document.getElementById("dropdownteams").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdownbtn')) {
        var dropdowns = document.getElementsByClassName("dropdowncontent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}