requirejs.config({
    baseUrl: '/waari_backbone/app',
    paths: {
        jquery: '../node_modules/jquery/dist/jquery.min',
        bootstrap: '../node_modules/bootstrap/dist/js/bootstrap.min',
        backbone: '../node_modules/backbone/backbone-min',
        underscore: '../node_modules/underscore/underscore-min'
    }
});

requirejs(['jquery', 'backbone', 'appRouter'], function($, Backbone, appRouter){
    new appRouter();
    Backbone.history.start();
});