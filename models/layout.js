var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// year - 2021, 2022 etc
// astma - ADLT, CHLD
function dynamicModel(year, asthma = '') {
	var datalayoutSchema = new Schema({
		field_name: { type: String, required: true },
		field_num: { type: Number, required: true, unique: true },
		start_pos: { type: Number, required: true, unique: true },
		local_len: { type: Number, required: true },
	});

	// Remove pre compiled models for subsequent calls
	mongoose.connections.forEach((connection) => {
		const modelNames = Object.keys(connection.models);

		modelNames.forEach((modelName) => {
			delete connection.models[modelName];
		});

		const collectionNames = Object.keys(connection.collections);
		collectionNames.forEach((collectionName) => {
			delete connection.collections[collectionName];
		});
	});

	const modelSchemaNames = Object.keys(mongoose.modelSchemas);
	modelSchemaNames.forEach((modelSchemaName) => {
		delete mongoose.modelSchemas[modelSchemaName];
	});


	return mongoose.model(
		'BRFSS' + year,
		datalayoutSchema,
		'BRFSS' + year + asthma
	);
}

module.exports = dynamicModel;
