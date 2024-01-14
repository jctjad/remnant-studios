$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        draggable: true,
        responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    })
})

function toggleDropdown(dropdownId, elementId) {
    var dropdownList = document.getElementById(dropdownId);
    var dropdownElement = document.getElementById(elementId);
    dropdownList.classList.toggle('hidden');
    dropdownElement.classList.toggle('down');
    dropdownElement.classList.toggle('up');
  }