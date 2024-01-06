$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        draggable: true
    })
})

function toggleDropdown(dropdownId, elementId) {
    var dropdownLists = document.querySelectorAll('.dropdown-list');
    var mainElements = document.querySelectorAll('.mainElement');
    dropdownLists.forEach(function(list) {
        if (list.id !== dropdownId) {
            list.classList.add('hidden');
        }
    })
    mainElements.forEach(function(list) {
        if (list.id !== elementId) {
            list.classList.remove('down');
            list.classList.add('up');
        }
    })

    var dropdownList = document.getElementById(dropdownId);
    var dropdownElement = document.getElementById(elementId);
    dropdownList.classList.toggle('hidden');
    dropdownElement.classList.toggle('down');
    dropdownElement.classList.toggle('up');
  }