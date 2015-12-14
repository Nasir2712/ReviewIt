// Avg Rating
Template.registerHelper('getAvg', function(reviews) {
	var sum = 0;
	for (var i = 0; i < reviews.length; i++) {
		sum += parseInt(reviews[i].rating, 10);
	}
	var avg = sum / reviews.length;
	return Math.round(avg);
});

Template.registerHelper('getReviewsTotal', function (total) {
	if (total > 0) {
		return total;
	} else {
		return 0;
	}
});