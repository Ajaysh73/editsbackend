import mongoose from 'mongoose';

const resultSchema = mongoose.Schema({
	userId: { type: 'String' },
	email: { type: 'String', required: true },
	fileName: { type: 'String' },
	editsErrors: { type: [mongoose.Schema.Types.Mixed] },
	editsSummaryErrors: { type: [mongoose.Schema.Types.Mixed] },
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Result = mongoose.model('Result', resultSchema);
export default Result;
