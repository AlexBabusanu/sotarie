function skidi() {
//hero slideshow
    $(".slideshow-container").superslides({
        animation:"fade",
        play:6000
    });
    

//buton

     $(".to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1200, "easeInOutExpo");
    });

    $(".custom-scroll-link").on("click", function() {
        var a = 74;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
 
//header change
    $(window).scroll(function(){
        if ($(this).scrollTop()>150) {
                $("header").addClass("sticky")
                 setTimeout(function(){
                   $(".logo-holder").addClass("logo-sticky");
            }, 350);
        } else {
            $("header").removeClass("sticky");
            setTimeout(function() {
                $(".logo-holder").removeClass("logo-sticky");
            }, 350);
        }

    });


    $("#map-canvas").gmap3({
        action: "init",
        marker: {

            // markers and locations------------------
            values: [ {
                latLng: [ 47.163137, 27.581844 ],
                data: "Bulevardul Ștefan cel Mare și Sfânt, 700064 Iasi, Romania",
                options: {
                    icon: "jpg/marker.png"
                }
            } ],
            options: {
                draggable: false
            },
            events: {
                mouseover: function(a, b, c) {
                    var d = $(this).gmap3("get"), e = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (e) {
                        e.open(d, a);
                        e.setContent(c.data);
                    } else $(this).gmap3({
                        infowindow: {
                            anchor: a,
                            options: {
                                content: c.data
                            }
                        }
                    });
                },
                mouseout: function() {
                    var a = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (a) a.close();
                }
            }
        },
        map: {
            options: {
                zoom: 18,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                scrollwheel: false,
                streetViewControl: true,
                draggable: true,
                styles: [ {
                    featureType: "all",
                    elementType: "labels.text",
                    stylers: [ {
                        weight: "0.04"
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "administrative.locality",
                    elementType: "all",
                    stylers: [ {
                        hue: "#56a6c9"
                    }, {
                        saturation: 7
                    }, {
                        lightness: 19
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "administrative.locality",
                    elementType: "labels.text",
                    stylers: [ {
                        hue: "#ffde00"
                    } ]
                }, {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [ {
                        hue: "#ffffff"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 100
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [ {
                        hue: "#56a6c9"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 5
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [ {
                        hue: "#56a6c9"
                    }, {
                        saturation: -93
                    }, {
                        lightness: 31
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [ {
                        hue: "#56a6c9"
                    }, {
                        saturation: -93
                    }, {
                        lightness: 31
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels",
                    stylers: [ {
                        hue: "#56a6c9"
                    }, {
                        saturation: -93
                    }, {
                        lightness: -2
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [ {
                        hue: "#56a6c9"
                    }, {
                        saturation: -90
                    }, {
                        lightness: -8
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [ {
                        hue: "#56a6c9"
                    }, {
                        saturation: 10
                    }, {
                        lightness: 69
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [ {
                        hue: "#56a6c9"
                    }, {
                        saturation: -78
                    }, {
                        lightness: 67
                    }, {
                        visibility: "simplified"
                    } ]
                } ]
            }
        }
    });
// magnificPopup------------------
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: false,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom",
        image: {
            verticalFit: false
        }
    });
    $(".popup-youtube, .popup-vimeo , .show-map").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        fixedContentPos: true,
        fixedBgPos: true,
        tLoading: "Loading image #%curr%...",
        removalDelay: 600,
        closeBtnInside: true,
        mainClass: "my-mfp-slide-bottom",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [ 0, 1 ]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $(".popup-with-move-anim").magnificPopup({
        type: "ajax",
        alignTop: false,
        overflowY: "scroll",
        fixedContentPos: true,
        fixedBgPos: true,
        closeBtnInside: false,
        midClick: true,
        modal: true,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(document).on("click", ".popup-modal-dismiss", function(a) {
        a.preventDefault();
        $.magnificPopup.close();
    });
// owl carousel  ------------------
    var b = $(".fullscreen-slider");
    b.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: true
    });
    $(".fullscreen-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".fullscreen-slider-holder").find(b).trigger("owl.next");
    });
    $(".fullscreen-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".fullscreen-slider-holder").find(b).trigger("owl.prev");
    });
    
    var d = $(".fullheight-carousel");
    d.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 4,
        pagination: false,
        autoHeight: true
    });
    $(".fullheight-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".fullheight-carousel-holder").find(d).trigger("owl.next");
    });
    $(".fullheight-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".fullheight-carousel-holder").find(d).trigger("owl.prev");
    });
    $(".carousel-link-holder").hover(function() {
        $(this).parent(".carousel-item").addClass("vis-decor");
    }, function() {
        $(this).parent(".carousel-item").removeClass("vis-decor");
    });
    var e = $(".single-slider");
    e.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        responsiveRefreshRate: 200,
        autoHeight: false,
    
    });
    $(".single-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(e).trigger("owl.next");
    });
    $(".single-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(e).trigger("owl.prev");
    });
    var f = $(".product-slider");
    f.owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        afterInit: g
    });
    $(".product-image a.next-slide").on("click", function() {
        $(this).closest(".product-image").find(f).trigger("owl.next");
    });
    $(".product-image a.prev-slide").on("click", function() {
        $(this).closest(".product-image").find(f).trigger("owl.prev");
    });
    function g() {
        $(".owl-controls .owl-page").append('<a class="item-link" href="#"/>');
        var a = $(".owl-controls .item-link");
        $.each(this.owl.userItems, function(b) {
            $(a[b]).css({
                background: "url(" + $(this).find("img").attr("src") + ") center center no-repeat",
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                "background-size": "cover"
            }).click(function(a) {
                a.preventDefault();
                owl.trigger("owl.goTo", b);
            });
        });
    }
    
    // isotope ------------------
    function k() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
        }
    }
    k();
    $(window).load(function() {
        k();
    });
        // contact form------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message2").slideUp(750, function() {
            $("#message2").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contactform .name").val(),
                email: $("#contactform .email").val(),
                phone: $("#contactform .phone").val(),
                comments: $("#contactform .comments").val()
            }, function(a) {
                document.getElementById("message2").innerHTML = a;
                $("#message2").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message2").slideUp(1500);
    });

};



//
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = $("#main");
        b.find("[data-top-bottom]").length > 0 && b.waitForImages(function() {
            s = skrollr.init();
            s.destroy();
            skrollr.init({
                forceHeight: !1,
                easing: "outCubic",
                mobileCheck: function() {
                    return !1;
                }
            });
        });
    }
    if (trueMobile) { $(".video-container video , .video-holder iframe , .background-video").remove();}
};



$(document).ready(function() {
    skidi();
    initparallax();
});
