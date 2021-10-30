
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
