// Categories
Categories = new Mongo.Collection("categories");
//Products
Products = new Mongo.Collection("products");

//Product Image Collection
ProductImages = new FS.Collection("ProductImages", {
	stores: [new FS.Store.GridFS("ProductImages")]
});