Router.configure({ layoutTemplate: 'layout'});
Router.route('/');
Router.route('/home', {
	name :"home",
	data: function(){
		templateData = {
			products: Products.find({is_featured: '1'})
		};
		return templateData;
	}
});

Router.route('/products', {
	name: "products",
	data: function(){
		templateData = {
			products: Products.find()
		};
		return templateData;
	}
});

Router.route('/addproduct', {
	name: "addproduct",
	data: function(){
		templateData = {
			categories: Categories.find()
		};

		return templateData;
	}
});

Router.route('/categories/:slug', {
	name: "category",
	data: function(){
		templateData = {
			category: Products.find({
				category : this.params.slug
			})
		};
		return templateData;
	}
}); 

Router.route('/newReview/:_id', {
	name: 'newReview',
	data: function() {
		return Products.findOne(this.params._id)
		}
});

Router.route('/products/:_id', {
	name: 'product',
	data: function() {
		return Products.findOne(this.params._id)
		}
}); 