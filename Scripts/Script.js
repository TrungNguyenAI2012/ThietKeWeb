$(document).ready(function () {
    // Hơ giỏ hàng
    $("#cart").mouseover(function() {
        $("#cart img").attr('src', $("#cart img").data("hover"));
    }).mouseout(function() {
        $("#cart img").attr('src', $("#cart img").data("src"));
    });

    // Hơ Slide BackGround
    $("#BigCarousel").mouseover(function () {
        return $("#BigCarousel .left, #BigCarousel .right").show();
    }).mouseout(function () {
        return $("#BigCarousel .left, #BigCarousel .right").hide();
    });

    // Hơ nút "lên đầu trang"
    $("#lenDauTrang").click(function() {
        return $("body, html").animate({ scrollTop: 0 }, 1000), !1
    });
  
    // Hơ đổi hình ảnh
    $("img").mouseover(function () {
        $(this).attr('src', $(this).data("hover"));
    }).mouseout(function () {
        $(this).attr('src', $(this).data("src"));
    });

    // Mở đoạn chat
    $("#chatTT .btn").click(function () {
        $("#chatTT form").toggle();
    });

    // ToolTip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    
});

// open
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Dropdown
function showCity() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}




