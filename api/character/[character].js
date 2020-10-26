// const character = require("../../services/character");

module.exports = async (req, res) => {
  try {
    const {
      query: { characterId },
    } = req;

    console.log(toString(characterId));

    res.status(200).json({
      id: characterId,
      // data: await character(id),
    });
  } catch (error) {
    console.log(error);
  }
};
