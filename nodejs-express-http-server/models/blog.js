const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the structure of our db.
const blogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		snippet: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// model declaration
const Blog = mongoose.model('Blog', blogSchema);
/* Model. A Mongoose model is a wrapper on the Mongoose schema. 
A Mongoose schema defines the structure of the document, 
default values, validators, etc., whereas a Mongoose model provides an interface
to the database for creating, querying, updating, deleting records, etc. */

module.exports = Blog;
