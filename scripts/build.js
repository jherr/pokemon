const fs = require("fs");

const index = [];
for (const pokemon of JSON.parse(fs.readFileSync("./original.json"))) {
  const image = `images/${pokemon.name.english
    .toLowerCase()
    .replace(/\s+/, "-")}.jpg`;
  if (!fs.existsSync(image)) {
    console.log(`No image on ${pokemon.name.english}`);
  }
  index.push({
    id: pokemon.id,
    name: pokemon.name.english,
    image,
  });
  fs.writeFileSync(
    `./pokemon/${pokemon.id}.json`,
    JSON.stringify(
      {
        ...pokemon,
        image,
      },
      null,
      2
    )
  );
}

fs.writeFileSync(`./index.json`, JSON.stringify(index, null, 2));
