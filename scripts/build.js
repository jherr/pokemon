const fs = require("fs");

for (const pokemon of JSON.parse(fs.readFileSync("./index.json"))) {
  fs.writeFileSync(
    `./pokemon/${pokemon.id}.json`,
    JSON.stringify(pokemon, null, 2)
  );
}
