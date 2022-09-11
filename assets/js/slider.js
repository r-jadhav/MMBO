$(document).ready(function(){
    $('.product-slider').slick({
       autoplay:true,
      slidesToShow:2,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
         {
            breakpoint:992,
            settings:{

             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{

           slidesToShow:1,
          }
       }
      ]
 
    });
 
    // $('.nav-trigger').click(function(){
    //    $('.site-content-wrapper').toggleClass('scaled');
    // })
 });

 $(document).ready(function(){
    $('.row-slider').slick({
       autoplay:true,
      slidesToShow:4,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
         {
            breakpoint:992,
            settings:{

             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{

           slidesToShow:1,
          }
       }
      ]
 
    });
 });