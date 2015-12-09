Template.addproduct.events({
	"submit.addproduct":function(event){

		var name = event.target.name.value;
		var category = event.target.category.value;
		var description = event.target.description.value;
		var is_featured = event.target.is_featured.value;

		var file = $("#productImage").get(0).files[0];

		if(file){

			fsFile = new FS.File(file);

			ProductImages.insert(fsFile, function(err, result){
				if(!err) {
					var productImage = '/cfs/files/ProductImages/'+result._id;

					Products.insert({
						name:name,
						category:category,
						is_featured:is_featured,
						image:productImage,
						createdAt: new Date()
					});
				}

			});
		} else {
			var productImage = '/Img/noimage.png';
			Products.insert({
						name:name,
						category:category,
						is_featured:is_featured,
						image:productImage,
						createdAt: new Date()
					});
		}

		//Clear Form
		event.target.name.value = "";
		event.target.category.value = "";
		event.target.description.value = "";
		event.target.is_featured.value = "";

		FlashMessage.sendSuccess("Product Added");
		Router.go('/');

		return false;
	}

});