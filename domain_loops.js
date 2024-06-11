// refactored:

const pronoun = ["the", "our"];
const adjective = ["great", "big"];
const noun = ["jogger", "racoon"];

const domains = [];
for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
  for (let adjectiveIndex = 0; adjectiveIndex < adjective.length; adjectiveIndex++) {
    for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
      domains.push(`${pronoun[pronounIndex]}${adjective[adjectiveIndex]}${noun[nounIndex]}`);
    }
  }
}

for (const domain of domains) {
  console.log(domain + ".com");
}

// ************************************************//
// Before refactoring:

// let pronoun = ["the", "our"];
// let adj = ["great", "big"];
// let noun = ["jogger", "racoon"];

// const domains = [];
// for (let index = 0; index < pronoun.length; index++) {
//   for (let secondIndex = 0; secondIndex < adj.length; secondIndex++) {
//     for (let thirdIndex = 0; thirdIndex < noun.length; thirdIndex++) {
//       domains.push(`${pronoun[index]}${adj[secondIndex]}${noun[thirdIndex]}`);
//     }
//   }
// }

// for (const domain of domains) {
//   console.log(domain + ".com");
// }