const comics = require("../../services/comics");
const events = require("../../services/events");
const series = require("../../services/series");
const stories = require("../../services/stories");

module.exports = async (req, res) => {
  try {
    const {
      query: { resourceId },
    } = req;

    res.status(200).json({
      resourceId: resourceId,
      data: {
        msg: "requested for resources",
        comics: await comics(resourceId),
        series: await series(resourceId),
        events: await events(resourceId),
        stories: await stories(resourceId),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
