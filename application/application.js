
$(document).on("click","button",function(){

var message = $(this).closest(".popup").find("a").attr("href");


var subject =$(this).closest(".popup").find("h2").html();


window.plugins.socialsharing.share(message, subject);// notice that this must be replace to subject !!
 

});
//$(document).on("panelcreate", ".panel", function () {
       
    //var text = $('<button>hello world</button>');
 //$(".panel p").after(text);
//});


//change css background it works fine
//$(document).ready(function() {
//$('#page1').on('click', '#color1', function() {
  //   $(".ui-overlay-a, .ui-page-theme-a, .ui-page-theme-a .ui-panel-wrapper").css('background-color', 'yellow')
//});
//$('#page1').on('click', '#color2', function() {
 //    $(".ui-overlay-a, .ui-page-theme-a, .ui-page-theme-a .ui-panel-wrapper").css('background-color', 'red')
//});
//});
//

$(document).on("pagecreate", "#page1", function () {
    var ic = '<span class="ui-icon-minus ui-btn-icon-notext inlineIcon"></span>';
    $(".ui-li-divider").prepend(ic);
});

//$(document).on("pagecreate", "data-role=panel", function () {

 //  var ic = '<span data-role="button" data-inline="false" data-icon="delete" data-rel="close" data-theme="b""></span>'; 
 //   $(".ui-li-divider").prepend(ic);

//});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();    
        } else {
            $('#toTop').fadeOut();
        }
    });
 
    $('#toTop').click(function() {
        alert('nice');
         $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
    });    
});

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});



$(document).on("click", ".collapseExpand", function () {
    var collapseAll = this.id == "btnCollapse";
    if (collapseAll) {
        $(".ui-li-divider .ui-icon-minus").click();
    } else {
        $(".ui-li-divider .ui-icon-plus").click();
    }
});

$(document).on("click", '.ui-li-divider', function (e) {
    var IsCollapsed = false;
    var TheDivider = $(this);
    var li = TheDivider.next(':not(.ui-li-divider)');
    while (li.length > 0) {
        IsCollapsed = li.css('display') == 'none';
        var UseAnimation = $("#chkAnim").prop("checked");
        if (UseAnimation) {
            ApplyTransition(li, IsCollapsed);
        } else {
            li.slideToggle(300);
        }

        li = li.next(':not(.ui-li-divider)');
    }

    var $icon = TheDivider.find('.inlineIcon');
    if (!IsCollapsed) {
        $icon.removeClass('ui-icon-minus').addClass('ui-icon-plus');
    } else {
        $icon.removeClass('ui-icon-plus').addClass('ui-icon-minus');
    }
    e.stopPropagation();
    return false;
});

function ApplyTransition(li, IsCollapsed) {
    if (IsCollapsed) {
        li.show(0, function () {
            $(this).addClass('flow in').one('webkitAnimationEnd oanimationend msAnimationEnd mozAnimationEnd animationend', function (e) {
                $(this).removeClass('flow in');
            });
        });
    } else {
        li.addClass('flow out').one('webkitAnimationEnd oanimationend msAnimationEnd mozAnimationEnd animationend', function (e) {
            $(this).hide();
            $(this).removeClass('flow out');
        });
    }
}

