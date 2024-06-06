let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const domains = [];
for (let index = 0; index < pronoun.length; index++) {
  for (let secondIndex = 0; secondIndex < adj.length; secondIndex++) {
    for (let thirdIndex = 0; thirdIndex < noun.length; thirdIndex++) {
      domains.push(`${pronoun[index]}${adj[secondIndex]}${noun[thirdIndex]}`);
    }
  }
}

for (const domain of domains) {
  console.log(domain + ".com");
}