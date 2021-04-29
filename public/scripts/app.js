console.log('sanity check');

$(function () {
    $(".select").on("change keyup", function () {
        $("#dropdown-year").submit();
    });
});

$(function () {
    $(".select").on("change keyup", function () {
        $("#dropdown-country").submit();
    });
});

$(function () {
    $(".select").on("change keyup", function () {
        $("#dropdown-manufacturer").submit();
    });
});


