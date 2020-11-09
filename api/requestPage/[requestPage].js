const getPage = require("../../services/getPage");

module.exports = async (req, res) => {
  try {
    const {
      query: { requestPage },
    } = req;

    res.status(200).json({
      url: requestPage,
      data: getPage(requestPage),
    });
  } catch (error) {
    console.log(error);
  }
};
