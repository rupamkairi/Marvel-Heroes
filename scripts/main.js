var querry = {
  name: "",
  limit: 10,
  offset: Math.round(Math.random() * 10)
};

var data;

async function Req() {
  event.preventDefault();
  querry.name = document.getElementById("search_input").value;
  let timestamp = Date.now();
  let hash = CryptoJS.MD5(timestamp + user.private_key + user.public_key);

  let url = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${user.public_key}&hash=${hash}&name=${querry.name}`;
  //   &limit=${querry.limit.toString()}&offset=${querry.offset.toString()}`;
  console.log(url);

  let response = await fetch(url);
  data = await response.json();
  let results = data.data.results;
  console.log(data);
}
