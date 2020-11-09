const axios = require("axios");
const crypto = require("crypto");

function series(resourceId) {
  let ts = Date.now();

  let endpoint = `http://gateway.marvel.com/v1/public/characters/${resourceId}/series`;

  let hash = crypto
    .createHash("md5")
    .update(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
    .digest("hex");

  const url = `${endpoint}?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`;
  // console.log(url);

  return new Promise((resolve) => {
    axios.get(url).then((res) => {
      if (res.status == 200) {
        // console.log(res.data.data);
        resolve(res.data.data);
      }
    });
  });
}

// async function Log() {
//   return characters({ name: "nova" });
// }
// Log();

module.exports = series;
