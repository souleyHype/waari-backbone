define(['backbone', 'underscore', 'controllers/appController'], function(Backbone, _, AppController){
    var appRouter = Backbone.Router.extend({

        initialize: function(){
            var appController = new AppController();
        },

        routes: {
            '': 'index',
            'products(/:action)(/:id)': 'products',
            'orders': 'orders',
        },

        index: function(){
            console.log('Index Route');
        },

        products: function(action, id){
            switch(action){
                case 'new':
                    console.log('New Product');
                    break;
                case 'edit':
                    console.log('Edit Product');
                    break;
                case 'view':
                    if(! _.isNull(id)){
                        console.log('View Product: ', id);
                    }
                    break;
                case 'delete':
                    if(! _.isNull(id)){
                        console.log('Delete Product: ', id);
                    }
                    break;
                default :
                    console.log('Products Index');
                    break;
            }
        }
    });

    return appRouter;
});