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