//if (console && console.log) console.log('In OurJScript.js');
$(document).ready(function () {
    //if (console && console.log) console.log("In document ready");

    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
        touch: true,
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });



    $(".nav-button").click(function () {
        $(".nav-button,.primary-nav").toggleClass("open");
    });


    $(".findOutMore").click(function (event) {

        if ($(this).attr("id") == "moreLeon") {
            $("#moreLeonButton").hide(500);
            $("#about2").show(500);
        }

        if ($(this).attr("id") == "lessLeon") {
            $("#about2").hide(500);
            $("#moreLeonButton").show(500);
        }

        if ($(this).attr("id") == "morePtrainingPC") {
            $("#pTraining").hide(500);
            $("#bTraining").hide(500);
            $("#gTraining").hide(500);
            $("#linksBar1").hide(500);
            $("#linksBar2").hide(500);
            $("#linksBar3").hide(500);
            $(".servicesHeader").hide(500);

            $("#pTraining3").show(500);
        }
        if ($(this).attr("id") == "moreBtrainingPC") {
            $("#pTraining").hide(500);
            $("#bTraining").hide(500);
            $("#gTraining").hide(500);
            $("#linksBar1").hide(500);
            $("#linksBar2").hide(500);
            $("#linksBar3").hide(500);
            $(".servicesHeader").hide(500);
            $("#bTraining3").show(500);
        }
        if ($(this).attr("id") == "moreGtrainingPC") {
            $("#pTraining").hide(500);
            $("#bTraining").hide(500);
            $("#gTraining").hide(500);
            $("#linksBar1").hide(500);
            $("#linksBar2").hide(500);
            $("#linksBar3").hide(500);
            $(".servicesHeader").hide(500);
            $("#gTraining3").show(500);
        }

        if ($(this).attr("id") == "lessPtrainingPC" || $(this).attr("id") == "lessBtrainingPC" || $(this).attr("id") == "lessGtrainingPC") {
            $("#pTraining").show(500);
            $("#bTraining").show(500);
            $("#gTraining").show(500);
            $("#linksBar1").show(500);
            $("#linksBar2").show(500);
            $("#linksBar3").show(500);
            $(".servicesHeader").show(500);
            $("#pTraining3").hide(500);
            $("#bTraining3").hide(500);
            $("#gTraining3").hide(500);
        }
        if ($(this).attr("id") == "morePtrainingMobile") {
            $("#pTraining2").show(500);
            $("#morePtrainingMobileP").hide(500);

        }

        if ($(this).attr("id") == "moreBtrainingMobile") {
            $("#bTraining2").show(500);
            $("#moreBtrainingMobileP").hide(500);
        }

        if ($(this).attr("id") == "moreGtrainingMobile") {
            $("#gTraining2").show(500);
            $("#moreGtrainingMobileP").hide(500);
        }

        if ($(this).attr("id") == "lessPtrainingMobile") {
            $("#pTraining2").hide(500);
            $("#morePtrainingMobileP").show(500);
        }

        if ($(this).attr("id") == "lessBtrainingMobile") {
            $("#bTraining2").hide(500);
            $("#moreBtrainingMobileP").show(500);
        }

        if ($(this).attr("id") == "lessGtrainingMobile") {
            $("#gTraining2").hide(500);
            $("#moreGtrainingMobileP").show(500);

        }


        event.preventDefault();


    });

    $(window).resize(function ()
     {     
//     var width = $('html').width();

//        if (width < 651)
//         {
//            $("#pTraining").show(500);
//            $("#bTraining").show(500);
//            $("#gTraining").show(500);
//            $("#morePtrainingMobileP").show(500);
//            $("#moreBtrainingMobileP").show(500);
//            $("#moreGtrainingMobileP").show(500);
//            $("#pTraining3").hide(500);
//            $("#bTraining3").hide(500);
//            $("#gTraining3").hide(500);
//            singleColumn = true;
//        }
//        else 
//            {
//                $("#pTraining2").hide(500);
//                $("#bTraining2").hide(500);
//                $("#gTraining2").hide(500);
//                $("#morePtrainingMobileP").hide(500);
//                $("#moreBtrainingMobileP").hide(500);
//                $("#moreGtrainingMobileP").hide(500);
//                $("#linksBar1").show(500);
//                $("#linksBar2").show(500);
//                $("#linksBar3").show(500);
//            }
    });


});
