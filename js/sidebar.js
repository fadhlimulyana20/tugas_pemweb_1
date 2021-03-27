$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
    });

    
    $('#close-sidebar').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
    });


});