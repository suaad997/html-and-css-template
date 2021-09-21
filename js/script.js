$(document).ready(function () {
    Scrolling0();
    theSlideImages();

   
});
//not use in IE 9 ---------------------------------------------
function x() {
    $("#navtop a").click(function (event) {
        event.currentTarget === this || event.srcElement===this;
        event.preventDefault();

        var SectionID = event.currentTarget.id + "Section";

       //alert("gggg:" + SectionID);

        $("html, body").animate({
            scrollTop:$("#" + SectionID).offset().top
        },500);
    });

}
//------------------------------------------------------------
function Scrolling0() {
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }

    });
}