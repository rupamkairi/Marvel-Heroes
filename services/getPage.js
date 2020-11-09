// const axios = require("axios");
// const crypto = require("crypto");

function getPage(page) {
  console.log(page);
  // let ts = Date.now();

  // let hash = crypto
  //   .createHash("md5")
  //   .update(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
  //   .digest("hex");

  // const url = `${endpoint}/${id}?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`;

  // return new Promise((resolve) => {
  //   axios.get(url).then((res) => {
  //     if (res.status == 200) {
  //       console.log(res.data.data);
  //       resolve(res.data.data);
  //     }
  //   });
  // });
}

// async function Log() {
//   return characters({ name: "nova" });
// }
// Log();

module.exports = getPage;
