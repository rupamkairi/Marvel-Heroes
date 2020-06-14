module.exports = (req, res) => {
  const {
    query: { search },
  } = req;

  res.status(200).send({
    log: `search for ${search}`,
  });
};
