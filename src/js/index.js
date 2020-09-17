var $splitter = $(".h1");
$splitter.each(function (i, e) {
    var $e = $(e);
    var name = $e.text().split(" ");
    var firstname = name.splice(0, 1);
    var last = "";
    for (var i = 0; i < name.length; ++i)
        last += name[i] + " ";
    $e.html("<span>" + firstname + "</span>" + last);
});
//accordion
$(document).ready(function () {
    $(".accordion_container > a").on("click", function (e) {
        e.preventDefault()
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".accordion_content").slideUp(200);
        } else {
            $(this).addClass("active");
            $(this).siblings(".accordion_content").slideDown(200);
        }
    });
});