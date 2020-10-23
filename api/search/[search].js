const characters = require("../../services/characters");

module.exports = async (req, res) => {
  try {
    const {
      query: { search },
    } = req;

    let params = {
      name: "",
      nameStartsWith: "",
      comics: "",
      series: "",
      stories: "",
      events: "",
      orderBy: "name",
      limit: 10,
      offset: 0,
    };

    params.nameStartsWith = search;

    res.status(200).json({
      query: search,
      data: await characters(params),
    });
  } catch (error) {
    console.log(error);
  }
};
