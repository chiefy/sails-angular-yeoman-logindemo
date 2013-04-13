/*---------------------
	:: User
	-> model
---------------------*/

var SALT_WORK_FACTOR = 10;

module.exports = {
	attributes	: {
		email: 'String',
		name: 'String',
		password: {
			type: 'String',
			required: true,
			index: { unique: true }
		}
	}
};
