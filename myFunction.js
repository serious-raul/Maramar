// The read more function (symbol, text, button)

function showMore(rets, more, button) {

    var dots = document.getElementById(rets);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(button);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
