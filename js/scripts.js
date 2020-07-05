/* <!-- Script for activating toolkit -->
    <!-- <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
    </script> --> */


/*    <!-- Script for pause and play button function of carousel --> */
    
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });
    

/*<!-- Modifying carousels control button -->*/

$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});


/*<!-- Login model trigger -->*/

    $(document).ready(function(){
      $("#login").click(function(){
        $("#loginModal").modal();
      });
    });


/*<!-- Reserve model triggrt  -->*/

    $(document).ready(function(){
      $("#reserveButton").click(function(){
        $("#reserveModal").modal();
      });
    });

