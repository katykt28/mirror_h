$(document)(function(){
$.when(
    open_curtain()
    ).done(function(){
        document.getElementById('menu-btn').style.opacity = '1';
    });
});