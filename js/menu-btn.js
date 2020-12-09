$(function(){
$(document).when(
    open_curtain()
    ).done(function(){
        document.getElementById('menu-btn').style.opacity = '1';
    });
});

// $("#effect").on('animationend webkitAnimationEnd',function(){
//     document.getElementById('menu-btn').style.opacity = '1';
// });