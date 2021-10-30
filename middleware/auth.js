import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const isCustomAuth = token.length < 500;

		let decodeData;
		if (token && isCustomAuth) {
			decodeData = jwt.verify(token, 'test');
			console.log(decodeData);
			req.userId = decodeData?.id;
			req.email = decodeData?.email;
		} else {
			decodeData = jwt.decode(token);
			req.userId = decodeData?.sub; // google id
			req.email = decodeData?.email; // google email
		}
		next();
	} catch (error) {
		console.log(error);
	}
};

export default auth;
