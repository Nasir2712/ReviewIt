Meteor.publish('products', function() {
	return Products.find();
})

Meteor.publish('categories', function() {
	return Categories.find();
})

if (Categories.find().count() === 0) {

Categories.insert({

name:'Electronics',

slug:'electronics'

});
Categories.insert({

name:'Mens Fashion',

slug:'mensfashion'

});

Categories.insert({

name:'Womens Fashion',

slug:'womenfashion'

});
}

ProductImages.allow({
	insert:function(fileId, doc) {
		return true
	},
	download:function(fileId, doc) {
		return true
	},
	update: function(fileId, doc) {
		return true;
	}
});