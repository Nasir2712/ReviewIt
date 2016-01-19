Template.addproduct.events({
	"submit .addproduct": function(event){
		
		var name = event.target.name.value;
		var category = event.target.category.value;
		var description = event.target.description.value;
		var is_featured = event.target.is_featured.value;

		var file = $('#productImage').get(0).files[0];
		var fsFile = new FS.File(file);

		ProductImages.insert(fsFile, function(err, result){
			var productImage = '/cfs/files/ProductImages/'+result._id;
			Meteor.call('addProduct', productImage, name, category, description, is_featured);
		});

		// Clear form
	    event.target.name.value = "";
	    event.target.category.value = "";
	    event.target.description.value = "";
	    event.target.is_featured.value = "";

	    FlashMessages.sendSuccess("Product Added");
	    Router.go('/home');

		return false;
	}
});