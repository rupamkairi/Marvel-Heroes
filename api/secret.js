module.exports = (req, res) => {
	res.status(200).send({
		public_key: process.env.PUBLIC_KEY,
		private_key: process.env.PRIVATE_KEY 
	})
}