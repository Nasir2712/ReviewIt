Meteor.methods({
	addProduct: function(productImage,name,category,description,is_featured) {
		if(productImage){
			// fsFile = new FS.File(file);

			// ProductImages.insert(fsFile, function(err, result){
			// 	if(!err){
			// 		var productImage = '/cfs/files/ProductImages/'+result._id;

					Products.insert({
						name: name,
						category: category,
						description: description,
						is_featured: is_featured,
						image: productImage,
						createdAt: new Date()
					});
			// 	}
			// });
		} else {
			var productImage = '/img/noimage.png';

			Products.insert({
				name: name,
				category: category,
				description: description,
				is_featured: is_featured,
				image: productImage,
				createdAt: new Date()
			});
		}
	},

	addReview: function(id, rating, body) {
		Products.update({
			_id: id
		},{
			$push:{
				reviews: {
					rating: rating,
					body: body,
					review_date : new Date()
				}
			}
		});
	}
});