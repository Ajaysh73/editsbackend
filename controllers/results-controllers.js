import Result from '../models/result.js';

export const save = async (req, res) => {
	// const { fileName, editsErrors, editsSummaryErrors } = req.body;  --- in resultPost
	const resultPost = req.body;
	if (!req.userId) return res.json({ message: 'Unauthenticated' });
	const newResult = new Result({ ...resultPost, email: req.email, userId: req.userId, createdAt: new Date().toISOString() });
	console.log('newResult', newResult);
	try {
		const updateResult = await Result.findOneAndUpdate(
			{ userId: req.userId, fileName: resultPost.fileName },
			{ $set: { email: req.email, createdAt: new Date().toISOString(), editsErrors: resultPost.editsErrors, editsSummaryErrors: resultPost.editsSummaryErrors } },
			{ upsert: true }
		);
		res.status(204).json(updateResult);
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong.' });
		console.log(error);
	}
};

export const reterive = async (req, res) => {
	const { fileName } = req.params;
	console.log('in reterive', req.params);
	if (!req.userId) return res.json({ message: 'Unauthenticated' });
	try {
		const foundResult = await Result.findOne({ userId: req.userId, fileName: fileName }, { editsErrors: 1, editsSummaryErrors: 1 });
		console.log(req.userId, fileName);
		console.log(foundResult);
		res.status(201).json(foundResult);
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong.' });
		console.log(error);
	}
};
