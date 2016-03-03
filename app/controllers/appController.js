define(['underscore', 'backbone', 'views/products'], function(_, Backbone, productsView){
    var appController = Backbone.View.extend({
        eventDispatcher: {},
        views: {},

        initialize: function(){
            _.extend(this.eventDispatcher, Backbone.Events);

            this.views = {
                productsView: new productsView()
            };
        }
    });

    return appController;
});