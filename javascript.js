<script>
    var x = 0;
    y();
    function y() {
        var i;
        var slides = document.getElementsByClassName("slider");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        x++;
        if (x > slides.length) {x = 1}
        slides[x-1].style.display = "block";
        setTimeout(y,2000);
    }
</script>