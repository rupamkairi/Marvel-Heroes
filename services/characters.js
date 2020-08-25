const axios = require("axios");
const crypto = require("crypto");

const endpoint = "https://gateway.marvel.com/v1/public/characters";

function characters(params) {
  let ts = Date.now();

  let hash = crypto
    .createHash("md5")
    .update(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
    .digest("hex");

  const url = `${endpoint}?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}&name=${params.name}`;

  return new Promise(resolve => {
    axios.get(url).then(res => {
      if (res.status == 200) {
        // console.log(response.data.data);
        resolve(res.data.data);
      }
    });
  });
}

// async function Log() {
//   return characters({ name: "nova" });
// }
// Log();

module.exports = characters;
