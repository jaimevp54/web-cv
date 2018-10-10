$(document).ready(function(){

    let $body = $('body');
    let $window= $(window);
    let windowWidth = $window.width();
    $window.mousemove(function(e){
        const x = e.pageX - e.target.offsetLeft;
        // const y = e.pageY - e.target.offsetTop;
        $body.css('--rotation', `${((x/windowWidth) *20)-10}deg`);
        // $this.css('--x', `${((x/$this.width()) *20)-10}}deg`);

    });
});
