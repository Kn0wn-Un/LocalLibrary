var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
	name: { type: String, required: true, minlenght: 3, maxlength: 100 }, //reference to the associated book
});

// Virtual for bookinstance's URL
GenreSchema.virtual('url').get(function () {
	return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
