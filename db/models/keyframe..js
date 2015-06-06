var Sequelize = require('sequelize');

models.exports = function(db){

	var Keyframe = sequelize.define('Keyframe', {
		id: { type: Sequelize.STRING, primaryKey: true},
		filename: Sequelize.TEXT,
		text_state: Sequelize.TEXT,
		event_type: Sequelize.TEXT,
		last_commit: Sequelize.STRING,		// look up git event types, does git provide info?
		prev_keyframe: Sequelize.INTEGER,
		next_keyframe: Sequelize.INTEGER,
		branch_name: Sequelize.STRING 		// what info can we discern from th branch names?
	});

	return Keyframe;

};