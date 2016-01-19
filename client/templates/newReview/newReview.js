Template.newReview.events({
	'submit .new-review': function(event) {
		var rating = event.target.rating.value;
		var body = event.target.body.value;

		 Meteor.call('addReview', this._id, rating, body);

         FlashMessages.sendSuccess('Review Added');
         Router.go('/products');

         return false;     
	}
});