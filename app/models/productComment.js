var mongoose = require('mongoose');

var ProductCommentSchema = new mongoose.Schema ({
	productID:{type:String},
	userID:{type:String},
	comment:{type:String}
});

module.exports = mongoose.model('ProductComment', ProductCommentSchema);