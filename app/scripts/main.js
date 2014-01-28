
$(document).ready(function(){
    $('#animation').on('click', '.anim-block', function(){
        var $el = $(this);
        var cls = $el.text() + ' animated';
        $el.removeClass(cls)
            .addClass(cls)
            .one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function(){
                $(this).removeClass(cls);
            });
    });

    $('#tooltips button').tooltip();
    $('#popover button').popover();
});
