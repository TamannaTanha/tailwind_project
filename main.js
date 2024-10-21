$('.dark-scr').click(function(){
    $('body').addClass('darkmode').removeClass('lightmode');
});
$('.light-scr').click(function(){
    $('body').addClass('lightmode').removeClass('darkmode');
});

$('.dark-scr').click(function(){
    $('.light-scr').show();
    $('.dark-scr').hide();
});



$('.light-scr').click(function(){
    $('.dark-scr').show();
    $('.light-scr').hide();
});